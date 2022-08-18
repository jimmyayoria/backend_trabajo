
import logo from '../../assets/img/logo.jpeg';

import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {

    const toggleMenu = () => {
        const body = document.querySelector('.body');
        body.classList.toggle('body--dark');
        headerNavThemeIconContainer.classList.toggle('header-nav__theme-icon-container--active');
        
        if (body.classList.contains('body--dark')) {
            localStorage.setItem('lightMode', 'false');
        } else {
            localStorage.setItem('lightMode', 'true');
        }
    };


    return (
    
        <header className="header">
            <nav className="header-nav">
                <div className="header-nav__container">
                    <a href="./index.html" className="header-nav__link-logo-container">
                        <img src={logo}  alt="Logo Clínica" className="header-nav__link-logo"/>
                    </a>
                    <div className="header-nav__theme-menu-container">
                        <button className="header-nav__theme-icon-container" id="headerNavThemeIconContainer" onClick={() => toggleMenu()}>
                            <span className="header-nav__theme-icon" >☀️</span>
                            <span className="header-nav__theme-icon" >🌙</span>
                        </button>
                        <div id="headerNavMenuIcon" className="header-nav__menu-icon-label">
                            <i className="bi bi-filter-right"></i>
                        </div>
                        <ul className="header-nav__menu-link-list">
                            <li className="header-nav__menu-link-item">
                            <Link
                                to="/"
                                className="header-nav_menu-link header-nav_menu-link--active"
                            >
                                <i className="bi bi-house-door"></i>
                            </Link>

                            </li>
                            <li className="header-nav__menu-link-item">
                                <a href="#about" className="header-nav_menu-link">Nosotros</a>
                            </li>
                            <li className="header-nav__menu-link-item">
                                <a href="#specialties" className="header-nav_menu-link">Especialidades</a>
                            </li>
                            <li className="header-nav__menu-link-item">
                                <a href="#offices" className="header-nav_menu-link">Sedes</a>
                            </li>
                            <li className="header-nav__menu-link-item">
                                <a href="#contact" className="header-nav_menu-link">Contactos</a>
                            </li>
                            <li className="header-nav__menu-link-item">
                                <a href="./staff.html" className="header-nav_menu-link">Staff</a>
                            </li>
                            <li className="header-nav__menu-link-item">
                                <a href="./Login.html" className="header-nav_menu-link">Citas</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        
    
        )

}




