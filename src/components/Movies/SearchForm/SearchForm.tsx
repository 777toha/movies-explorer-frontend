import './SearchForm.css';

function FilterCheckbox() {
    return (
        <div className='filter'>
            <input type="checkbox" className='filter__togglebtn' />
            <label htmlFor="chech1">
                <b></b>
            </label>
            <span className='filter__title'>Короткометражки</span>
        </div>
    )
}

function SearchForm() {
    return (
        <section className='search-form'>
            <div className="search-form__content">
                <form 
                action=""
                className='search-form__form'
                >
                    <input 
                    type="text"
                    className='search-form__input'
                    placeholder='Фильм'
                    />
                    <button
                    className='search-form__button'
                    >Найти</button>
                </form>
            </div>
            <FilterCheckbox />
        </section>
    )
}

export default SearchForm;