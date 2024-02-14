import { Dispatch, SetStateAction, useEffect } from "react";

interface aboutProps {
    setLocation: Dispatch<SetStateAction<string>>;
}

function About(props: aboutProps) {
    useEffect(() => {
        props.setLocation('About')
    }, [props]);

    return (
        <div>
            <div className="profilePic-container">
                <img className="profilePic" src="./images/profile.jpeg" />
                <div className="about-me-header">
                    <div className="about-me-header-name">Hashveenah Manoharan</div>
                    <div className="about-me-header-title">Arborist, Artist</div>
                </div>
                <div className="about-me-container">
                    <div className="about-me-container-title">
                        About Me
                    </div>
                    <div className="about-me-container-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis elit et posuere congue. Maecenas non maximus magna, id porttitor metus. Curabitur at neque et ligula volutpat feugiat. Donec sed turpis eu dolor tristique sodales. Mauris convallis semper venenatis. Nulla facilisi. Morbi et facilisis risus. Praesent rhoncus velit nisl, sagittis pellentesque lectus varius sed. Vivamus aliquam dui non odio faucibus viverra. Integer luctus ligula non dapibus fermentum.
                    </div>
                </div>
            </div>
            <div className="video-container">
                <div className="video-container-header">Drawing the natural world </div>
                <iframe className="video-container-video" src="https://www.youtube.com/embed/UtuTZn0gPuI?si=_K6v2sk3l7LqxBZW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div className="video-container-credit">Directed by Matthew Viveen </div>
            </div>
            <div className="quote-container">
                <div className="quote-container-quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</div>
                <div className="quote-container-author"> - Author -</div>
            </div>
            <div className="links-container"><br /><br /><br /><br /></div>
        </div>
    );
}

export default About;