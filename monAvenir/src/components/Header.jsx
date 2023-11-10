import { Link } from "react-router-dom";
import  logo  from "../assets/img/logo.jpg";
import '../assets/css/header.css'
import { useState } from "react";

const Header = () => {

    const [isToggle, toggler] = useState(false)

    function togglerHandler() {
        toggler(!isToggle)
    }

    const expanded = isToggle ? 'expanded' : ''

    return (
        <div>
            <div className="navbar web" >
                <div className="navbar-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-links">
                    <Link to='/'>Accueil</Link>
                    <Link to='/primaire'>Primaire</Link>
                    <Link to='/college'>Collège</Link>
                    <Link to='/apropos'>A propos</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>

            <div className={`navbar mobile ${expanded}`}>
                <div className="header">
                    <div className="navbar-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="toggler">
                        <button onClick={() => togglerHandler()}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </button>
                    </div>
                </div>
                
                <div className="navbar-links">
                    <Link to='/'>Accueil</Link>
                    <Link to='/primaire'>Primaire</Link>
                    <Link to='/college'>Collège</Link>
                    <Link to='/apropos'>A propos</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Header