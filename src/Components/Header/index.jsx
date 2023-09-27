import './header.scss';

import Logo from '../Assets/Images/logo.jpg';

import { NavLink } from 'react-router-dom';

function Header() {

    return (
        <>
            <header className='header'>
                <ul>
                    <NavLink to={'/'} >
                        <li >Главная</li>
                    </NavLink>
                    <NavLink to={'/faq'} >
                        <li >FAQ</li>
                    </NavLink>
                    <NavLink to={'/'}>
                        <img src={Logo} alt="Что то сломалось..." />
                    </NavLink>
                    <NavLink to={'/gallery'}>
                        <li>Галерея</li>
                    </NavLink>
                    <NavLink to={'/services'}>
                        <li>Услуги</li>
                    </NavLink>
                </ul>
            </header>
        </>
    );
}

export default Header;