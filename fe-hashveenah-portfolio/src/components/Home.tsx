import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkType } from "../types";
import userService from '../services/user';
import linkService from '../services/link';

interface aboutProps {
    setLocation: Dispatch<SetStateAction<string>>;
}

function Home(props: aboutProps) {
    const [aboutMe, setAboutMe] = useState('');
    const [links, setLinks] = useState<LinkType[]>([]);

    useEffect(() => {
        props.setLocation('Home');
    }, [props])
    // useEffect used to set the appropriate "About Me" and "My Art" text

    useEffect(() => {
        userService.getUser().then(res => {
            setAboutMe(res[0].about);
        })

        linkService.getAllLinks().then(res => {
            setLinks(res);
        })
    }, [])

    return (
        <div className="home">
            <div className="name">HASHVEENAH MANOHARAN</div>
            <img className="profilePic" src="./images/profile.jpg" />
            <div className="home-info">
                <div className="home-info-sub">
                    <p className="home-info-title">Bio</p>
                    <p className="home-info-content">{aboutMe}</p>
                </div>

            </div>
            <hr id="home-hr" />
            <div className="home-img-gallery">
                <img className="home-img-gallery-pic" src="./images/fox.jpg" />
                <img className="home-img-gallery-pic" src="./images/drawing.jpg" />
                <img className="home-img-gallery-pic" src="./images/woodburning.jpg" />
            </div>
            <Link className="home-art-link" to="/projects">View Selected Works</Link>
            <hr id="home-hr" />
            <div className="video-container about-me-container">
                {/* <hr className="about-me-hr-top" /> */}
                <div className="home-info-title" style={{ "textAlign": "center" }}> An Interview with Hashveenah Manoharan </div>
                <div className="home-info-content" style={{ "textAlign": "center" }}>Directed by Matthew Viveen </div>
                <iframe className="video-container-video" src="https://www.youtube.com/embed/UtuTZn0gPuI?si=_K6v2sk3l7LqxBZW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                {/* <hr className="about-me-hr-bottom" /> */}
            </div>
            <hr id="home-hr" />
            <div className="links" style={{ "textAlign": "center" }}>
                <div className="home-info-title" style={{ "textAlign": "center" }}> Featured Links</div>

                <div className="linksList">
                    {links.map((link) =>
                        <>
                            <div className="linksList-Link">
                                <a className="home-art-link" href={link.link} target="_">{link.name}</a><br></br>
                                <p className="linksList-Link-description">
                                    {link.description}
                                </p>
                            </div>
                        </>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Home;