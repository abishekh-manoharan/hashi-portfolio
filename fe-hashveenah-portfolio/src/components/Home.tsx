import { Dispatch, SetStateAction, useEffect } from "react";
import { Link } from "react-router-dom";

interface aboutProps {
    setLocation: Dispatch<SetStateAction<string>>;
}

function Home(props: aboutProps) {

    useEffect(() => {
        props.setLocation('home');
    }, [props])
    
    return (
        <div className="home">
            <video id="home-background-video" autoPlay loop muted>
                <source src="./videos/sunlight.mp4" type="video/mp4" />
            </video>
            <div className="home-content">
                <div className="name">Hashveenah Manoharan</div>
                <div className="title">Arborist, Artist.</div>
                <div className="home-nav">
                    <div className="home-nav-link"><Link to='about'>ABOUT</Link></div>
                    <div className="home-nav-link"><Link to='projects'>SELECTED WORKS</Link></div>
                    <div className="home-nav-link"><Link to='contact'>CONTACT</Link></div>
                </div>
            </div>
        </div>
    );
}

export default Home;