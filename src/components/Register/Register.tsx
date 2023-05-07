import './Register.css'
import logo from '../../images/logo_profile.svg'

function Register() {
    return (
        <section className="register">
            <div className="register__header">
                <img src={logo} alt="logo" />
                <h1 className="register__title">Добро пожаловать!</h1>
            </div>
            <form className="register__form">
                <label htmlFor="" className="register__form_label">Имя</label>
                <input type="name" className="register__form_input" value='Виталий' />
                <span className="register__form_span" />
                <label htmlFor="" className="register__form_label">E-mail</label>
                <input type="email" className="register__form_input" value='pochta@yandex.ru' />
                <span className="register__form_span" />
                <label htmlFor="" className="register__form_label">Пароль</label>
                <input type="password" className="register__form_input" />
                <span className="register__form_span">Что-то пошло не так...</span>
            </form>
            <div className="register__footer">
                <button className='register__footer_button'>Зарегистрироваться</button>
                <div className='register__footer_flex'>
                    <h2 className="register__footer_title">Уже зарегистрированы?</h2>
                    <a className="register__footer_signin" href="/signin">Войти</a>
                </div>
            </div>
        </section>
    )
}

export default Register;