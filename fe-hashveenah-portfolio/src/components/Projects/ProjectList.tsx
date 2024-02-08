import { Dispatch, SetStateAction, useEffect } from "react";

interface projectProps {
    setLocation: Dispatch<SetStateAction<string>>;
}


function ProjectList(props: projectProps) {
    useEffect(() => {
        props.setLocation('Projects')
    }, [props]);


    return (
        <div className="projects-list">
            <br/>
            <swiper-container pagination loop>
                <swiper-slide>
                    <img className="swiper-image" src="http://via.placeholder.com/640x400" />
                </swiper-slide >
                <swiper-slide>
                    <img className="swiper-image" src="http://via.placeholder.com/300x360" />
                </swiper-slide >
                <swiper-slide>
                    <img className="swiper-image" src="http://via.placeholder.com/300x360" />
                </swiper-slide>
            </swiper-container>
            <swiper-container pagination loop>
                <swiper-slide>
                    <img className="swiper-image" src="http://via.placeholder.com/640x360" />
                </swiper-slide >
                <swiper-slide>
                    <img className="swiper-image" src="http://via.placeholder.com/300x360" />
                </swiper-slide >
                <swiper-slide>
                    <img className="swiper-image" src="http://via.placeholder.com/300x360" />
                </swiper-slide>
            </swiper-container>
            <swiper-container pagination loop>
                <swiper-slide>
                    <img className="swiper-image" src="http://via.placeholder.com/640x360" />
                </swiper-slide >
                <swiper-slide>
                    <img className="swiper-image" src="http://via.placeholder.com/300x360" />
                </swiper-slide >
                <swiper-slide>
                    <img className="swiper-image" src="http://via.placeholder.com/300x360" />
                </swiper-slide>
            </swiper-container>
            <swiper-container pagination loop>
                <swiper-slide>
                    <img className="swiper-image" src="http://via.placeholder.com/640x360" />
                </swiper-slide >
                <swiper-slide>
                    <img className="swiper-image" src="http://via.placeholder.com/300x360" />
                </swiper-slide >
                <swiper-slide>
                    <img className="swiper-image" src="http://via.placeholder.com/300x360" />
                </swiper-slide>
            </swiper-container>
            <swiper-container pagination loop>
                <swiper-slide>
                    <img className="swiper-image" src="http://via.placeholder.com/640x360" />
                </swiper-slide >
                <swiper-slide>
                    <img className="swiper-image" src="http://via.placeholder.com/300x360" />
                </swiper-slide >
                <swiper-slide>
                    <img className="swiper-image" src="http://via.placeholder.com/300x360" />
                </swiper-slide>
            </swiper-container>            
        </div>
    );
}

export default ProjectList;