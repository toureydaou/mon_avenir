import '../assets/css/loadingPage.css'
import logo from '../assets/img/logo.jpg'

const LoadingPage = () => {
    return (
        <div>
            <div className="loading-page">
                <div className='logo'>
                    <img src={logo} alt='mon avenir logo' />
                </div>
            </div>
        </div>
    )
}

export default LoadingPage