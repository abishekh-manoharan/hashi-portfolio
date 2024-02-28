import { NavLink, Outlet } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";
import Footer from "./Footer";
// import { useEffect, useState } from "react";

interface headerProps {
    location: string;
}

function Header(props: headerProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="headerAndOutlet">
            <div className="header-container">
                <HeaderMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <div className="header-content">
                    <img className="header-menu-logo" src="./images/menu.svg" onClick={() => { console.log('clock'); setMenuOpen(!menuOpen) }} />
                    <div className="header-name">Hashveenah Manoharan</div>
                    <div className="header-page-title">{props.location}</div>
                    <div className="header-nav">
                        <NavLink className="header-NavLink" to='/'>HOME</NavLink>
                        <NavLink className="header-NavLink" to='about'>ABOUT</NavLink>
                        <NavLink className="header-NavLink" to='projects'>SELECTED WORKS</NavLink>
                        <NavLink className="header-NavLink" to='contact'>CONTACT</NavLink>
                    </div>
                    <div className="footer-desktop">
                        <Footer />
                    </div>
                </div>
            </div>
            <div className="outlet">
                <Outlet />
            </div>
            <div className="footer-mobile">
                <Footer />
            </div>
        </div>);
}
export default Header;
