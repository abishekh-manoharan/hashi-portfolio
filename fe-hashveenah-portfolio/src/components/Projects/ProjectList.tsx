import { Dispatch, SetStateAction, useEffect } from "react";
import Project from "./Project";
import { ProjectEntry } from "../../types";

interface projectProps {
    setLocation: Dispatch<SetStateAction<string>>;
}


function ProjectList(props: projectProps) {
    useEffect(() => {
        props.setLocation('Selected Works')
    }, [props]);

    useEffect(() => { // adding styling to the bullets
        const swiperEl = document.querySelectorAll('swiper-container');

        const params = {
            injectStyles: [`
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
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
        imgSrc: ["http://via.placeholder.com/300x300", "http://via.placeholder.com/100x400", "http://via.placeholder.com/400x100"],
        name: "work",
        date: "2022",
        medium: "oil on canvas",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis elit et posuere congue. Maecenas non maximus magna, id porttitor metus. Curabitur at neque et ligula volutpat feugiat. Donec sed turpis eu dolor tristique sodales. Mauris convallis semper venenatis. Nulla facilisi. Morbi et facilisis risus. Praesent rhoncus velit ."
    }

    return (
        <div className="projects-list">
            <br />
            <Project project={project}/>
            <Project project={project}/>
            <Project project={project}/>
            <Project project={project}/>
        </div>
    );
}

export default ProjectList;

