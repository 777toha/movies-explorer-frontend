import './Profile.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useCallback, useState } from 'react';
import { patchUserInfo, logout } from '../../utils/MainApi';
import { useFormWithValidation } from '../../utils/validate';
import { EMAIL_PATTERN } from '../../utils/constants';
import CurrentUserContext from '../../context/CurrentUserContext';
import galochka from '../../images/galochka.svg';
import krest from '../../images/krest.svg';

type PropsProfile = {
    isMenuActvite: boolean
    onOpenMenu: React.MouseEventHandler<HTMLButtonElement>
    onCloseMenu: React.MouseEventHandler<HTMLButtonElement>
    logOut: () => void;
    handleTooltipOpen: () => void;
    setIsInfoTooltipMessage: React.Dispatch<React.SetStateAction<{
        image: string;
        caption: string;
    }>>
}

type User = {
    name: string;
    email: string;
}

function Profile(props: PropsProfile) {

    const [isTooltipActive, setIsTooltipActive] = useState(false);
    const [isFormChanged, setIsFormChanged] = useState(false);


    const navigate = useNavigate()

    const { isMenuActvite,
        onOpenMenu,
        onCloseMenu,
        logOut,
        handleTooltipOpen,
        setIsInfoTooltipMessage
    } = props;
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    const userData = React.useContext(CurrentUserContext);

    const handleProfile = useCallback(async (data: User) => {
        try {
            await patchUserInfo(data);
            handleTooltipOpen();
            setIsInfoTooltipMessage({
                image: galochka,
                caption: 'Данные успешно отправлены'
            })
        } catch (err) {
            handleTooltipOpen();
            setIsInfoTooltipMessage({
                image: krest,
                caption: 'Произошла ошибка'
            })
            console.log(`Ошибка.....: ${err}`)
        }
    }, []);

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = {
            name: values.name || userData.name,
            email: values.email || userData.email
        };
        handleProfile(formData);

    }, [values, handleProfile]);

    const handleLogout = useCallback(async () => {
        try {
            await logout();
            logOut();
            navigate('/', { replace: true });
        } catch (err) {
            console.log(`Ошибка.....: ${err}`)
        }
    }, []);

    useEffect(() => {
        if (
          values.name !== userData.name ||
          values.email !== userData.email
        ) {
          setIsFormChanged(true);
        } else {
          setIsFormChanged(false);
        }
      }, [values, userData]);

    return (
        <section className='profile'>
            <Header
                isMenuActvite={isMenuActvite}
                onOpenMenu={onOpenMenu}
                onCloseMenu={onCloseMenu}
            />
            <div className="profile__container">
                <h1 className='profile__title'>{`Привет, ${userData.name}!`}</h1>
                <form className='profile__form' action="" onSubmit={handleSubmit}>
                    <ul className="profile__input-list">
                        <li className="profile__input-item">
                            <label className='profile__label' htmlFor="">Имя</label>
                            <input
                                className='profile__input'
                                type="text"
                                name='name'
                                minLength={4}
                                maxLength={40}
                                value={values.name || userData.name}
                                onChange={handleChange}
                            />
                        </li>
                        <li className="profile__input-item">
                            <label className='profile__label' htmlFor="">E-mail</label>
                            <input
                                className='profile__input'
                                type="text"
                                pattern={EMAIL_PATTERN}
                                name="email"
                                minLength={4}
                                maxLength={40}
                                value={values.email || userData.email}
                                onChange={handleChange}
                            />
                        </li>
                    </ul>
                    <button 
                    className={`profile__edit ${!isValid || !isFormChanged ? 'profile__edit_disabled' : '' }`} 
                    disabled={!isValid || !isFormChanged}
                    >Редактировать</button>
                </form>
                <button className="profile__out" onClick={handleLogout}>Выйти из аккаунта</button>
            </div>
        </section>
    )
}

export default Profile;
