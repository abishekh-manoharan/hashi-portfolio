import { useEffect, useRef } from "react";

function NavHideOnScroll() {
    const scrollLocation = useRef(0); // used to compare scroll locations between even triggers. Always starts at 0.
    
    const scrollHandler = () => {
        const header = document.querySelector('.header-content') as HTMLElement; // header element

        if (window.innerWidth <= 650) { // only apply header hide on mobile-view
            if (window.scrollY > scrollLocation.current && window.scrollY > 100) { // apply header hide on scroll down and if scrolled 100px down minimum
                header!.style.bottom = '70px';
            } else {  // show header when scrolling up
                header!.style.bottom = '0px';
            }
        } else { // ensure header is shown when not in mobile view
            header!.style.bottom = '0px';
        }

        scrollLocation.current = window.scrollY;
    }
    
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)        
        return () => window.removeEventListener('scroll', scrollHandler)
    }, []);

    return (<></>);
}

export default NavHideOnScroll;