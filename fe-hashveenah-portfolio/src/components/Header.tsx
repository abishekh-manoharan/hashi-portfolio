import { Outlet } from "react-router-dom";

interface headerProps {
    location :string;
}

function Header( props: headerProps ) {
    return (
        <>
            <div className="header">
                <div className="header-name">Hashveenah Manoharan</div>
                <div className="page-title">{props.location}</div>
                <div className="header-menu"><div>Menu</div></div>
            </div>
            <Outlet/>
        </>
    );
}

export default Header;