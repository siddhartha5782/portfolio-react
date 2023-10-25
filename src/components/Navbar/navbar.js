import React from "react";
import './navbar.css';
import logo from '../../../public/assets/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" />
            <div className="desktopMenu">

            </div>
            <button className="desktopMenuBtn">
                <img src="" alt="" className="desktopMenuImg"/>
                Contact Me
            </button>
        </nav>
    )
}

export default Navbar