import { Dispatch, SetStateAction, useEffect } from "react";

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
            width: 20px;
            height: 20px;
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
                renderBullet: function (index: number, className: string) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
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
            <div className="project">
                <swiper-container className="swiper-container" init={false} pagination loop>
                    <swiper-slide>
                        <img className="swiper-image" src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D" />
                    </swiper-slide >
                    <swiper-slide>
                        <img className="swiper-image" src="data:image/jpeg;base64,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" />
                    </swiper-slide >
                    <swiper-slide>
                        <img className="swiper-image" src="http://via.placeholder.com/400x100" />
                    </swiper-slide >
                </swiper-container>
                <div className="project-info">

                </div>
            </div>            
            <div className="project">
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
            <div className="project">
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
            <div className="project">
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
        </div>
    );
}

export default ProjectList;