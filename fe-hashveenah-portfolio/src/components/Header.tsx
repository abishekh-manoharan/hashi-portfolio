import { NavLink, Outlet, useNavigate } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
// import { useState } from "react";
import Footer from "./Footer";
import React, { useContext } from "react";
import { AuthContext } from "../utils/context";
import authServices from "../services/auth";
// import { useEffect, useState } from "react";

interface headerProps {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    location: string;
}

function Header(props: headerProps) {
    // const [menuOpen, setMenuOpen] = useState(false);
    const auth = useContext(AuthContext);
    const nav = useNavigate();

    const logoutHandler = (e: React.SyntheticEvent) => {
        e.stopPropagation();
        
        authServices.logout().then(res => {
            if(res === "success") {
                auth.setAuth!(false);
                nav('/');
            }
            else {
                window.alert('error with logout: '+res);
            }
        })
    }

    const navLinkActiveStyle = { 
        color: "#B47B84",
        borderLeft: "solid",
        paddingLeft: "5px"
    };

    return (
        <div className="headerAndOutlet">
            <div className="header-container">
                <HeaderMenu menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} />
                <div className="header-content">
                    <img className="header-menu-logo" src="./images/menu.svg" onClick={() => { props.setMenuOpen(!props.menuOpen) }} />
                    <div className="header-name"><NavLink to='/'>Hashveenah Manoharan</NavLink></div>
                    <div className="header-page-title">{props.location}</div>
                    <div className="header-nav">
                        {/* <NavLink className="header-NavLink" to='/'>HOME</NavLink> */}
                        <NavLink className="header-NavLink" to='/' style={({isActive})=>isActive ? navLinkActiveStyle : {}}>Home</NavLink>
                        <NavLink className="header-NavLink" to='projects' style={({isActive})=> isActive ? navLinkActiveStyle : {}}>Selected Works</NavLink>
                        <NavLink className="header-NavLink" to='contact' style={({isActive})=>isActive ? navLinkActiveStyle : {}}>Contact</NavLink>
                        { auth.auth ? <NavLink className="header-NavLink" to="/configuration" style={({isActive})=>isActive ? navLinkActiveStyle : {}}>Configuration</NavLink> : <></> }
                        { auth.auth ? <a className="header-NavLink" onClick={logoutHandler}>Logout</a> : <NavLink className="header-NavLink" to="/login" style={({isActive})=>isActive ? navLinkActiveStyle : {}}>Login</NavLink> }
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
