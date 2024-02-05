import { NavLink, Outlet } from 'react-router-dom';

function MobileNav() {
    return (
        <div>
            <NavLink to="/">Home</NavLink> 
            <NavLink to="/about">About</NavLink> 
            <NavLink to="/projects">Projects</NavLink> 
            <NavLink to="/contact">Contact</NavLink> 
            <Outlet/>
        </div>
    );
}

export default MobileNav;