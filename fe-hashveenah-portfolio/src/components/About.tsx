import { Dispatch, SetStateAction, useEffect, useState } from "react";
import data from '../../data';

interface aboutProps {
    setLocation: Dispatch<SetStateAction<string>>;
}

function About(props: aboutProps) {
    const artPics = [data[0].imgSrc[3], data[0].imgSrc[4], data[0].imgSrc[5]];
    const [artPicsLocation, setArtPicsLocation] = useState(0);


    // Updating art display photo for slideshow
    setTimeout(() => {
        if (artPicsLocation != artPics.length - 1) { 
            setArtPicsLocation(artPicsLocation + 1);
        } else {
            setArtPicsLocation(0);
        }
    }, 3000);
    useEffect(() => {
        const artPic = document.querySelector(".about-me-art-display-pic") as HTMLImageElement;
        artPic.src = artPics[artPicsLocation];
    }, [artPics, artPicsLocation]);


    // Updating location
    useEffect(() => {
        props.setLocation('About')
    }, [props, artPicsLocation, artPics]);

    return (
        <div className="about-me">
            <img className="profilePic" src="./images/profile.jpg" />
            <div className="about-me-about about-me-container">
                <hr />
                <div className="about-me-container-title about-me-font-color">
                    About Me
                </div>
                <div className="about-me-container-content about-me-font-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis elit et posuere congue. Maecenas non maximus magna, id porttitor metus. Curabitur at neque et ligula volutpat feugiat. Donec sed turpis eu dolor tristique sodales. Mauris convallis semper venenatis. Nulla facilisi. Morbi et facilisis risus. Praesent rhoncus velit nisl, sagittis pellentesque lectus varius sed. Vivamus aliquam dui non odio faucibus viverra. Integer luctus ligula non dapibus fermentum.
                </div>
                <hr />
            </div>

            <div className="about-me-art-display profilePic">
                <img className="about-me-art-display-pic" src="https://via.placeholder.com/300x100" alt="" />
            </div>

            <div className="about-me-art about-me-container">
                <hr />
                <div className="about-me-container-title about-me-font-color">
                    My Art
                </div>
                <div className="about-me-container-content about-me-font-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis elit et posuere congue. Maecenas non maximus magna, id porttitor metus. Curabitur at neque et ligula volutpat feugiat. Donec sed turpis eu dolor tristique sodales. Mauris convallis semper venenatis. Nulla facilisi. Morbi et facilisis risus. Praesent rhoncus velit nisl, sagittis pellentesque lectus varius sed. Vivamus aliquam dui non odio faucibus viverra. Integer luctus ligula non dapibus fermentum.
                </div>
                <hr />
            </div>
            {/* <div className="video-container">
                <div className="video-container-header"> An Interview with Hashveenah Manoharan </div>
                <div className="video-container-credit">Directed by Matthew Viveen </div>
                <iframe className="video-container-video" src="https://www.youtube.com/embed/UtuTZn0gPuI?si=_K6v2sk3l7LqxBZW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="quote-container">
                <div className="quote-container-quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</div>
                <div className="quote-container-author"> - Author -</div>
            </div>
            <div className="links-container"><br /><br /><br /><br /></div> */}
        </div>
    );
}

export default About;