import './Header.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
export function Header(){
    return (
        <div className="header">
            <div className="header__main">
                <Link to={`/`}>
                    <img className='logo-header' src={logo} alt="logo"/>
                </Link>
                <div className='header__menu'>
                    <div  className='header__title'>
                        <Link to={`/resize`}>
                            VIDEO RESIZE
                        </Link>
                    </div>
                    <div className='header__title'>
                        <Link to={`/contacts`}>
                            CONTACTS 
                        </Link>
                    </div>
                    <div className='header__title'>
                        <Link to={`/about`}>
                            ABOUT 
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}