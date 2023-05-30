import './Register.css'
import logo from '../../images/logo_profile.svg'
import { Link } from 'react-router-dom';
import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { register, login } from '../../utils/MainApi';
import { useFormWithValidation } from '../../utils/validate';
import { EMAIL_PATTERN } from '../../utils/constants';
import { PropsLogin } from '../../types/index.type';
import { getUserInfo } from '../../utils/MainApi';

type ProfileData = {
    name: string;
    email: string;
};

type RegisterData = ProfileData & {
    password: string;
};

function Register(props: PropsLogin) {

    const { setIsLoggedIn, setUserData } = props;

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    const navigate = useNavigate();

    useEffect(() => {
        resetForm()
    }, [resetForm]);

    const handleRegister = useCallback(async (data: RegisterData) => {
        try {
            await register(data);
            const { name, ...restData } = data;
            await login(restData);
            const userInfo = await getUserInfo();
            setUserData(userInfo);
            setIsLoggedIn(true);
            navigate('/movies');
        } catch (err) {
            console.log(`Ошибка.....: ${err}`)
        }
    }, [navigate]);

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = {
            name: values.name,
            email: values.email,
            password: values.password
        };
        handleRegister(formData);

    }, [values, handleRegister]);

    return (
        <section className="register">
            <div className="register__header">
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
                <h1 className="register__title">Добро пожаловать!</h1>
            </div>
            <form className="register__form" onSubmit={handleSubmit}>
                <label htmlFor="" className="register__form-label">Имя</label>
                <input
                    type="text"
                    className="register__form-input"
                    name="name"
                    minLength={4}
                    maxLength={40}
                    value={values.name}
                    onChange={handleChange}
                    required
                />
                <span className="register__form-span">{errors['name']}</span>
                <label htmlFor="" className="register__form-label">E-mail</label>
                <input
                    type="email"
                    className="register__form-input"
                    name="email"
                    minLength={4}
                    maxLength={40}
                    pattern={EMAIL_PATTERN}
                    value={values.email}
                    onChange={handleChange}
                    required
                />
                <span className="register__form-span">{errors['email']}</span>
                <label htmlFor="" className="register__form-label">Пароль</label>
                <input
                    type="password"
                    className="register__form-input"
                    name="password"
                    minLength={8}
                    maxLength={50}
                    onChange={handleChange}
                    value={values.password}
                    required
                />
                <span className="register__form-span">{errors['password']}</span>
                <button className={!isValid ? 'register__button register__button-inactive' : 'register__button'} disabled={!isValid}>Зарегистрироваться</button>
            </form>
            <div className="register__footer">
                <div className='register__footer-flex'>
                    <h2 className="register__footer-title">Уже зарегистрированы?</h2>
                    <a className="register__footer-signin" href="/signin">Войти</a>
                </div>
            </div>
        </section>
    )
}

export default Register;
