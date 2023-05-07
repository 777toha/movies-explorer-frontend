import './Preloader.css';
import sharingan from '../../../images/preloader-sharingan.png'

function Preloader() {
    return(
        <div className='preloader'>
            <img className='preloader__sharingan' src={sharingan} alt="sharingan" />
        </div>
    )
}

export default Preloader;
