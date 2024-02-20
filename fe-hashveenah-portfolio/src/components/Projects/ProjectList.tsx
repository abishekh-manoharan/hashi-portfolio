import { Dispatch, SetStateAction, useEffect } from "react";
import Project from "./Project";
import data from '../../../data';

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

    return (
        <div className="projects-list">
            <br />
            <Project project={data[0]}/>
            <Project project={data[1]}/>
        </div>
    );
}

export default ProjectList;

