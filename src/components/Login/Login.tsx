import './Login.css'
import logo from '../../images/logo_profile.svg';
import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, getUserInfo } from '../../utils/MainApi';
import { useFormWithValidation } from '../../utils/validate';
import { EMAIL_PATTERN } from '../../utils/constants';

type LoginData = {
    email: string;
    password: string;
};

type User = {
    name: string;
    email: string;
}

interface PropsLogin {
    setIsLoggedIn: (setIsLoggedIn: boolean) => void
    setUserData: (userData: User) => void
}

function Login(props: PropsLogin) {

    const {setIsLoggedIn, setUserData} = props;

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    const navigate = useNavigate();

    useEffect(() => {
        resetForm()
    }, [resetForm]);


    const handleLogin = useCallback(async (data: LoginData) => {
        try {
            await login(data);
            const userInfo = await getUserInfo();
            setUserData(userInfo);
            setIsLoggedIn(true)
            navigate('/movies');
        } catch (err) {
            console.log(`Ошибка.....: ${err}`)
        }
    }, [navigate, setIsLoggedIn, setUserData]);

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = {
            email: values.email,
            password: values.password
        };
        handleLogin(formData);

    }, [values, handleLogin]);

    return (
        <section className="login">
            <div className="login__header">
                <img src={logo} alt="logo" />
                <h1 className="login__title">Рады видеть!</h1>
            </div>
            <form className="login__form" onSubmit={handleSubmit}>
                <label htmlFor="" className="login__form-label">E-mail</label>
                <input
                    type="email"
                    className="login__form-input"
                    pattern={EMAIL_PATTERN}
                    name="email"
                    minLength={4}
                    maxLength={40}
                    value={values.email}
                    onChange={handleChange}
                    required
                />
                <span className="login__form-span">{errors['email']}</span>
                <label htmlFor="" className="login__form-label">Пароль</label>
                <input
                    type="password"
                    name="password"
                    className="login__form-input"
                    minLength={8}
                    maxLength={50}
                    value={values.password}
                    onChange={handleChange}
                    required
                />
                <span className="login__form-span">{errors['password']}</span>
                <button className={!isValid ? 'login__button login__button-inactive' : 'login__button'} disabled={!isValid}>Войти</button>
            </form>
            <div className="login__footer">
                <div className='login__footer-flex'>
                    <h2 className="login__footer-title">Ещё не зарегистрированы?</h2>
                    <a className="login__footer-signin" href="/signup">Регистрация</a>
                </div>
            </div>
        </section>
    )
}

export default Login;
