// Component for the mobile menu that opens up with an animation on click of the menu button

import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/context";
import authServices from "../services/auth";

interface headerMenuProps {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function HeaderMenu(props: headerMenuProps) {

    const { setMenuOpen } = props;
    const auth = useContext(AuthContext);
    const nav = useNavigate();

    const logoutHandler = (e: React.SyntheticEvent) => {
        e.stopPropagation();
        props.setMenuOpen(!props.menuOpen)
        authServices.logout().then(res => {
            if (res === "success") {
                auth.setAuth!(false);
                nav('/');
            }
            else {
                window.alert('error with logout: ' + res);
            }
        })
    }

    useEffect(() => { // ensures that if the user clicks outside of the menu, that the menu closes
        const menu = document.querySelector('.header-menu');
        const menuLogo = document.querySelector('.header-menu-logo');

        const clickHandler = (e: MouseEvent) => {
            e.stopPropagation();
            if (e.target instanceof Node) {
                if (!menu!.contains(e.target) && !menuLogo!.contains(e.target)) {
                    setMenuOpen(false);
                }
            }
        }

        window.addEventListener('click', clickHandler);

        return () => {
            window.removeEventListener('click', clickHandler);
        }
    }, [setMenuOpen]);


    const navLinkActiveStyle = {
        color: "#B47B84",
        // borderLeft: "solid",
        // paddingLeft: "5px"
    };

    return (
        <div className={`header-menu ${props.menuOpen ? 'animation-open-menu-header' : ''}`}>
            {/* <NavLink className="header-menu-NavLink" onClick={() => props.setMenuOpen(!props.menuOpen)} to='/'>HOME</NavLink> */}
            <NavLink className="header-menu-NavLink" style={({ isActive }) => isActive ? navLinkActiveStyle : {}} onClick={() => props.setMenuOpen(!props.menuOpen)} to='/'>Home</NavLink>
            <NavLink className="header-menu-NavLink" onClick={() => props.setMenuOpen(!props.menuOpen)} style={({ isActive }) => isActive ? navLinkActiveStyle : {}} to='projects'>Selected Works</NavLink>
            {/* <NavLink className="header-menu-NavLink" onClick={() => props.setMenuOpen(!props.menuOpen)} style={({isActive})=>isActive ? navLinkActiveStyle : {}} to='contact'>Contact</NavLink> */}
            {/* <NavLink className="header-menu-NavLink" onClick={() => props.setMenuOpen(!props.menuOpen)} style={({isActive})=>isActive ? navLinkActiveStyle : {}} to='login'>Login</NavLink> */}
            {auth.auth ? <NavLink to="inbox" className="header-menu-NavLink" onClick={() => props.setMenuOpen(!props.menuOpen)} style={({ isActive }) => isActive ? navLinkActiveStyle : {}}>Inbox</NavLink> : <NavLink className="header-menu-NavLink"  onClick={() => props.setMenuOpen(!props.menuOpen)} to='contact' style={({ isActive }) => isActive ? navLinkActiveStyle : {}}>Contact</NavLink>}
            {auth.auth ? <NavLink className="header-menu-NavLink"  onClick={() => props.setMenuOpen(!props.menuOpen)} to="/configuration" style={({ isActive }) => isActive ? navLinkActiveStyle : {}}>Configuration</NavLink> : <></>}
            {auth.auth ? <a className="header-menu-NavLink" onClick={logoutHandler}>Logout</a> : <NavLink className="header-menu-NavLink"  onClick={() => props.setMenuOpen(!props.menuOpen)} to="/login" style={({ isActive }) => isActive ? navLinkActiveStyle : {}}>Login</NavLink>}
        </div>
    );
}

export default HeaderMenu;
