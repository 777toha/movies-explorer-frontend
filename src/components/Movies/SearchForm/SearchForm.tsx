import { useCallback, useState } from 'react';
import './SearchForm.css';

interface PropsSeachForm {
    onSearch: (setSeach: string) => void;
    onShort: (setIsShort: boolean) => void;
    isShort: boolean
}

interface PropsFilterCheckbox {
    onShort: (setIsShort: boolean) => void;
    isShort: boolean
}

function FilterCheckbox(props: PropsFilterCheckbox) {

    const { isShort, onShort } = props;

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onShort(event.target.checked)
    }

    return (
        <section className='filter'>
            <input
                type="checkbox"
                className='filter__togglebtn'
                checked={isShort}
                onChange={handleCheckboxChange}
            />
            <label htmlFor="chech1">
                <b></b>
            </label>
            <span className='filter__title'>Короткометражки</span>
        </section>
    )
}

function SearchForm(props: PropsSeachForm) {

    const { onSearch, onShort, isShort } = props;

    const [nameMovie, setNameMovie] = useState('');

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(nameMovie)
    }, [nameMovie, onSearch]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameMovie(event.target.value);
    };

    return (
        <section className='search-form'>
            <div className="search-form__content">
                <form
                    action=""
                    className='search-form__form'
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name='Фильм'
                        className='search-form__input'
                        placeholder='Фильм'
                        value={nameMovie}
                        onChange={handleInputChange}
                        required
                    />
                    <button
                        className='search-form__button'
                    >Найти</button>
                </form>
            </div>
            <FilterCheckbox onShort={onShort} isShort={isShort} />
        </section>
    )
}

export default SearchForm;
