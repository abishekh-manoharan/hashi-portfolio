import { Dispatch, SetStateAction, useEffect } from "react";
import Project from "./Project";
import { ProjectEntry } from "../../types";

interface projectProps {
    setLocation: Dispatch<SetStateAction<string>>;
}


function ProjectList(props: projectProps) {
    useEffect(() => {
        props.setLocation('Projects')
    }, [props]);

    useEffect(() => { // adding styling to the bullets
        const swiperEl = document.querySelectorAll('swiper-container');

        const params = {
            injectStyles: [`
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            line-height: 20px;
            text-align: center;
            font-size: 12px;
            color: #000;
            opacity: 1;
            background: rgba(0, 0, 0, 0.2);
          }
    
          .swiper-pagination-bullet-active {
            color: #fff;
            background: #216329;
          }
          `],
            pagination: {
                clickable: true,
                // renderBullet: function (index: number, className: string) {
                //     return '<span class="' + className + '">' + (index + 1) + "</span>";
                // },
            },
        }

        swiperEl.forEach(container => {
            Object.assign(container!, params)    
            container!.initialize();
        });
        
    }, [])


    // sample project
    const project: ProjectEntry = {
        imgSrc: ["http://via.placeholder.com/400x400", "http://via.placeholder.com/100x400", "http://via.placeholder.com/400x100"],
        name: "work",
        date: "2022",
        medium: "oil on canvas",
        about: "painting i did for x companypainting i did for x companypainting i did for x companypainting i did for x companypainting i did for x companypainting i did for x companypainting i did for x company"
    }

    return (
        <div className="projects-list">
            <br />
            <Project project={project}/>
            <Project project={project}/>
            <Project project={project}/>
            <Project project={project}/>

                <swiper-container className="swiper-container" init={false} pagination loop>
                    <swiper-slide>
                        <img className="swiper-image" src="http://via.placeholder.com/400x400" />
                    </swiper-slide >
                    <swiper-slide>
                        <img className="swiper-image" src="http://via.placeholder.com/100x400" />
                    </swiper-slide >
                    <swiper-slide>
                        <img className="swiper-image" src="http://via.placeholder.com/400x100" />
                    </swiper-slide >
                </swiper-container>
                <div className="project-info">

                </div>
        </div>
    );
}

export default ProjectList;