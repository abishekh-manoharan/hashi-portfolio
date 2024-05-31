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
            <div className="name">HASHVEENAH MANOHARAN</div>
            <img className="profilePic" src="./images/profile.jpg" />
            <div className="home-info">
                <div className="home-info-sub">
                    <p className="home-info-title">Bio</p>
                    <p className="home-info-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className="home-info-sub">
                    <p className="home-info-title">Expertise</p>
                    <p className="home-info-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>
            <hr id="home-hr" />
            <Link className="home-art-link" to="/projects">View Selected Works</Link>
            <div className="home-img-gallery">
                <img className="home-img-gallery-pic" src="./images/snail1.jpeg" />
                <img className="home-img-gallery-pic" src="./images/drawing.jpg" />
                <img className="home-img-gallery-pic" src="./images/woodburning.jpg" />
            </div>
            <hr id="home-hr" />
        </div>
    );
}

export default Home;