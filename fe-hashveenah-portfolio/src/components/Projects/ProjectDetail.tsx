import { useParams } from "react-router-dom";
import data from '../../../data';
import { useEffect } from "react";

function ProjectDetail() {
    const { id, index } = useParams()

    const project = data.find((e) => { // finding the necessary project using the URL id
        return e.id === id;
    })

    useEffect(()=>{        
        const swiperEl = document.querySelector('swiper-container');
        console.log(swiperEl);
        
        swiperEl!.setAttribute("initialSlide", "2");
        swiperEl!.initialize();
    }, []);
    
    return (
        <div>
            <swiper-container initial-slide={index} className="project-desktop-detail">
                {
                    project ? 
                    project.imgSrc.map((src, i) =>
                        <swiper-slide key={src + i}>
                            <img className="swiper-image" src={src} />
                        </swiper-slide >
                    ) : <>Project Not Found!</>
                }
            </swiper-container>
        </div>
    );
}

export default ProjectDetail;