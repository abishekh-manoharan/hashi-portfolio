import { useEffect } from "react";
import { NavLink } from "react-router-dom";

interface headerMenuProps {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function HeaderMenu(props: headerMenuProps) {

    const { setMenuOpen } = props;

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


    return (
        <div className={`header-menu ${props.menuOpen ? 'animation-open-menu-header' : ''}`}>
            <NavLink className="header-menu-NavLink" onClick={() => props.setMenuOpen(!props.menuOpen)} to='/'>HOME</NavLink>
            <NavLink className="header-menu-NavLink" onClick={() => props.setMenuOpen(!props.menuOpen)} to='about'>ABOUT</NavLink>
            <NavLink className="header-menu-NavLink" onClick={() => props.setMenuOpen(!props.menuOpen)} to='projects'>SELECTED WORKS</NavLink>
            <NavLink className="header-menu-NavLink" onClick={() => props.setMenuOpen(!props.menuOpen)} to='contact'>CONTACT</NavLink>
        </div>
    );
}

export default HeaderMenu;
