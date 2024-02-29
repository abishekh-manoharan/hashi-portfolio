import { Dispatch, SetStateAction, useEffect, useState } from "react";
import data from '../../data';
import { Link } from "react-router-dom";

interface aboutProps {
    setLocation: Dispatch<SetStateAction<string>>;
}

function About(props: aboutProps) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const artPics = [data[0].imgSrc[3], data[1].imgSrc[1], data[0].imgSrc[2]];
    const [artPicsLocation, setArtPicsLocation] = useState(0);

    useEffect(() => {
        console.log('useEffect for setting the timeout running');

        const artPic = document.querySelector(".about-me-art-display-pic") as HTMLImageElement;
        artPic.src = artPics[artPicsLocation];
        const to = setTimeout(() => {
            setArtPicsLocation((artPicsLocation + 1) % artPics.length);
            console.log('location')
            console.log((artPicsLocation + 1) % artPics.length)
        }, 3500);

        return () => { clearTimeout(to) }
    })

    // useEffect(() => {
    //     console.log('useEffect for update of artPicsLocation running');
    //     const artPic = document.querySelector(".about-me-art-display-pic") as HTMLImageElement;
    //     //artPic.classList.remove("image-animation")
    //     setTimeout(() => {
    //         artPic.src = artPics[artPicsLocation];
    //         //  setTimeout(() => artPic.classList.add("image-animation"), 500);
    //     }, 200);
    // }, [artPicsLocation])




    // const to = setTimeout(() => {
    //     console.log('set art timeout set');
    //     setArtPicsLocation((artPicsLocation + 1) % artPics.length);
    // }, 5000);

    // const artPic = document.querySelector(".about-me-art-display-pic") as HTMLImageElement;

    // useEffect(() => {    
    //     console.log('useeffect: artPicsLocation triggered');

    //     setTimeout(() => {
    //         // remove the class and update the source after a delay
    //         artPic.classList.remove("image-animation");
    //         artPic.src = artPics[artPicsLocation];
    //         console.log('NEW IMAGE');
    //         // Add the class after a delay to trigger the animation
    //         setTimeout(() => {
    //             artPic.classList.add("image-animation");
    //         }, 50);
    //     }, 100);

    //     return (() => {
    //         console.log('clear timeout')
    //         clearTimeout(to)
    //     })
    // }, [artPicsLocation])

    // Updating location
    useEffect(() => {
        props.setLocation('About')
    }, [props, artPicsLocation, artPics]);

    return (
        <div className="about-me">
            <div className="profile-pic-container">
                <img className="profilePic" src="./images/profile.jpg" />
            </div>
            <div className="about-me-about about-me-container">
                <hr className="about-me-hr-top" />
                <div className="about-me-container-title about-me-font-color">
                    About Me
                </div>
                <div className="about-me-container-content about-me-font-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis elit et posuere congue. Maecenas non maximus magna, id porttitor metus. Curabitur at neque et ligula volutpat feugiat. Donec sed turpis eu dolor tristique sodales. Mauris convallis semper venenatis. Nulla facilisi. Morbi et facilisis risus. Praesent rhoncus velit nisl, sagittis pellentesque lectus varius sed. Vivamus aliquam dui non odio faucibus viverra. Integer luctus ligula non dapibus fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis elit et posuere congue. Maecenas non maximus magna, id porttitor metus. Curabitur at neque et ligula volutpat feugiat. Donec sed turpis eu dolor tristique sodales. Mauris convallis semper venenatis. Nulla facilisi. Morbi et facilisis risus. Praesent rhoncus velit nisl, sagittis pellentesque lectus varius sed. Vivamus aliquam dui non odio faucibus viverra. Integer luctus ligula non dapibus fermentum.
                </div>
                <hr className="about-me-hr-bottom" />
            </div>

            <div className="about-me-art-display profilePic">
                <img className="about-me-art-display-pic" src="https://via.placeholder.com/300x100" alt="" />
            </div>

            <div className="about-me-art about-me-container">
                <hr className="about-me-hr-top" />
                <div className="about-me-container-title about-me-font-color">
                    My Art
                </div>
                <div className="about-me-container-content about-me-font-color about-me-art-content" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis elit et posuere congue. Maecenas non maximus magna, id porttitor metus. Curabitur at neque et ligula volutpat feugiat. Donec sed turpis eu dolor tristique sodales. Mauris convallis semper venenatis. Nulla facilisi. Morbi et facilisis risus. Praesent rhoncus velit nisl, sagittis pellentesque lectus varius sed. Vivamus aliquam dui non odio faucibus viverra. Integer luctus ligula non dapibus fermentum.
                </div>
                <Link className="about-me-art-link" to="/projects">View Selected Works</Link>
                <hr className="about-me-hr-bottom" />
            </div>
            {/* <div className="quote-container">
                <div className="quote-container-child">
                    <img className="quote-container-quotationmark quote-container-quotationmark-open" src="/images/quotation-mark.png" alt="" />
                    <div className="quote-container-quote about-me-font-color about-me-art-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <div className="quote-container-author about-me-font-color about-me-art-content">Author</div>
                    <img className="quote-container-quotationmark quote-container-quotationmark-close" src="/images/quotation-mark.png" alt="" />
                </div>
            </div> */}

            <div className="video-container about-me-container">
                {/* <hr className="about-me-hr-top" /> */}
                <div className="about-me-container-title about-me-font-color video-container-header "> An Interview with Hashveenah Manoharan </div>
                <iframe className="video-container-video" src="https://www.youtube.com/embed/UtuTZn0gPuI?si=_K6v2sk3l7LqxBZW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div className="about-me-container-content about-me-font-color video-container-credit">Directed by Matthew Viveen </div>
                {/* <hr className="about-me-hr-bottom" /> */}
            </div>
            {/* {/* <div className="links-container"><br /><br /><br /><br /></div> */}
        </div>
    );
}

export default About;

