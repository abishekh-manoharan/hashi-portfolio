import { Outlet } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";
// import { useEffect, useState } from "react";

interface headerProps {
    location: string;
}

function Header(props: headerProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="header-container">
                <HeaderMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <div className="header-content">
                    <img className="header-menu-logo" src="./images/menu.svg" onClick={() => { console.log('clock'); setMenuOpen(!menuOpen) }} />
                    <div className="header-name">Hashveenah Manoharan</div>
                    <div className="header-page-title">{props.location}</div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Header;