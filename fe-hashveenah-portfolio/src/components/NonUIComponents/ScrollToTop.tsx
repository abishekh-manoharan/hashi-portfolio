import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// resets the scroll position to top whenever the location updates
const ScrollReset = () => {
    const { pathname } = useLocation(); 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollReset;