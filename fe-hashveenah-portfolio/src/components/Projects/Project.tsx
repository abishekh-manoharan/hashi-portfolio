import { Link } from "react-router-dom";
import { ProjectEntry } from "../../types";

interface projectProps {
    project: ProjectEntry;
    index: number;
    length: number;
}

function Project(props: projectProps) {
    console.log('project '+props.project.name)
    return (
        <div className="project-container">
            <div className="project">
                {/* @ts-expect-error the use of "class" is necessary here as the Swiper library's Element components don't work with className*/}
                <swiper-container class="swiper-container" thumbs-swiper={`.mySwiper${props.project.id}`} loop space-between="30">
                    {
                        props.project.imgSrc.map((src, i) =>
                            <swiper-slide key={src + i}>
                                <img className="swiper-image" src={src} />
                            </swiper-slide >
                        )
                    }
                </swiper-container>
                {/* @ts-expect-error the use of "class" is necessary here as the Swiper library's Element components don't work with className*/}
                <swiper-container class={`mySwiper${props.project.id} thumbSwiper`} loop space-between="10" slides-per-view="4" free-mode="true" watch-slides-progress="true" >
                    {
                        props.project.imgSrc.map((src, i) =>
                            <swiper-slide key={src + i}>
                                <img src={src} />
                            </swiper-slide >
                        )
                    }
                </swiper-container>
                <div className="project-info">
                    <div className="project-name">{props.project.name}</div>
                    {props.project.date ? <div className="project-date">{props.project.date}</div> : <></>}
                    <div className="project-medium">{props.project.medium}</div>
                    {props.project.about ? <div className="project-about">{props.project.about}</div> : <></>}
                </div>
                {
                    /*  only display hr when not on last project */
                    props.index != props.length - 1 ? <hr /> : <></>
                }
            </div>
            <div className="project-desktop">
                <div className="project-info project-info-desktop">
                    <div className="project-name">{props.project.name}</div>
                    {props.project.date ? <div className="project-date">{props.project.date}</div> : <></>}
                    <div className="project-medium">{props.project.medium}</div>
                </div>
                <div className="project-desktop-images">
                    {
                        props.project.imgSrc.map((img, index) => {
                            return (
                                <Link to={`/project/${props.project.id}/${index}/${props.project.imgSrc.length}`}>
                                    <img src={img} className="project-desktop-image" />
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Project;