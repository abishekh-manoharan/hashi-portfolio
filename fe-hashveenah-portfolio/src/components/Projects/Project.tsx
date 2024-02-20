import { Link } from "react-router-dom";
import { ProjectEntry } from "../../types";

interface projectProps {
    project: ProjectEntry;
}

function Project(props: projectProps) {
    return (
        <div className="project-container">
            <div className="project">
                <swiper-container className="swiper-container" init={false} pagination loop space-between="30">
                    {
                        props.project.imgSrc.map((src, i) =>
                            <swiper-slide key={src+i}>
                                <img className="swiper-image" src={src} />
                            </swiper-slide >
                        )
                    }
                </swiper-container>
                <div className="project-info">
                    <div className="project-name">{props.project.name}</div>
                    {props.project.date ? <div className="project-date">{props.project.date}</div> : <></>}
                    <div className="project-medium">{props.project.medium}</div>
                    {props.project.date ? <div className="project-about">{props.project.about}</div> : <></>}
                </div>
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
                                <Link to={`/project/${props.project.id}/${index}`}>
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