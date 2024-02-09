import { ProjectEntry } from "../../types";

interface projectProps {
    project: ProjectEntry;
}

function Project(props: projectProps) {
    return (
        <div className="project">
            <swiper-container className="swiper-container" init={false} pagination loop space-between="30">
                {
                    props.project.imgSrc.map(src =>
                        <swiper-slide>
                            <img className="swiper-image" src={src} />
                        </swiper-slide >
                    )
                }
            </swiper-container>
            <div className="project-info">
                <div className="project-name">{props.project.name}</div>
                <div className="project-date">{props.project.date}</div>
                <div className="project-medium">{props.project.medium}</div>
                <div className="project-about">{props.project.about}</div>
            </div>
        </div>
    );
}

export default Project;