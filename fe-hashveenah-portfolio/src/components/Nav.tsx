import { NavLink, Outlet } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <div className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Selected Works</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <Outlet />
        </div>
    );
}

export default Nav;