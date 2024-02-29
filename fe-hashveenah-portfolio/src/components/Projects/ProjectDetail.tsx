import { useNavigate, useParams } from "react-router-dom";
import data from '../../../data';
import { useEffect } from "react";
import { setPaginationStyling } from "../../utils/helpers";

function ProjectDetail() {
    const nav = useNavigate(); // initiating nav object to be used in going back to project list

    const { id, index } = useParams() // id: id of the project. index: index of the image that was clicked in the array

    const project = data.find((e) => { // finding the necessary project using the URL id
        return e.id === id;
    })

    useEffect(() => {
        // adding styling to the bullets and arrows
        setPaginationStyling();

        const header = document.querySelector(".header-container") as HTMLElement;
        header!.style.display = "none";

        return (() => { header!.style.display = "block" });
    }, [])



    return (
        <>
            <button className="project-desktop-detail-back-btn" onClick={() => { nav(-1) }}>
                <img src="/images/x.svg" />
            </button>
            <div className="project-desktop-detail">
                <swiper-container init={false} navigation initial-slide={index} pagination loop space-between="30" >
                    {
                        project ? // show project images only if project exists
                            project.imgSrc.map((src, i) =>
                                <swiper-slide key={src + i}>
                                    <img className="swiper-image" src={src} />
                                </swiper-slide >
                            ) : <>Project Not Found!</>
                    }
                </swiper-container>
                <div className="project-desktop-detail-header">
                    <span className="project-name">{project?.name}, </span>
                    <span className="project-medium">{project?.medium}, </span>
                    <span className="project-date">{project?.date}</span>
                </div>
                <div className="project-about">{project?.about}</div>

            </div>
        </>
    );
}

export default ProjectDetail;