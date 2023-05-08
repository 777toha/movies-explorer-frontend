import './Login.css'
import logo from '../../images/logo_profile.svg';

function Login() {
    return (
        <section className="login">
            <div className="login__header">
                <img src={logo} alt="logo" />
                <h1 className="login__title">Рады видеть!</h1>
            </div>
            <form className="login__form">
                <label htmlFor="" className="login__form-label">E-mail</label>
                <input type="email" className="login__form-input" value='pochta@yandex.ru' />
                <span className="login__form-span" />
                <label htmlFor="" className="login__form-label">Пароль</label>
                <input type="password" className="login__form-input" />
                <span className="login__form-span"></span>
            </form>
            <div className="login__footer">
                <button className='login__footer-button'>Войти</button>
                <div className='login__footer-flex'>
                    <h2 className="login__footer-title">Ещё не зарегистрированы?</h2>
                    <a className="login__footer-signin" href="/signup">Регистрация</a>
                </div>
            </div>
        </section>
    )
}

export default Login;
