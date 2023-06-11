import './Preloader.css';
import sharingan from '../../../images/preloader-sharingan.png'

function Preloader() {
    return(
        <section className='preloader'>
            <img className='preloader__sharingan' src={sharingan} alt="sharingan" />
        </section>
    )
}

export default Preloader;
