import { useNavigate, useParams } from "react-router-dom";
// import data from '../../../data';
import { useEffect, useState } from "react";
import { setPaginationStyling } from "../../utils/helpers";
import EntryService from '../../services/entry';
import { ProjectEntry } from "../../types";
import { SwiperContainer } from "swiper/element";

function ProjectDetail() {
    const { id, index, length } = useParams() // id: id of the project. index: index of the image that was clicked in the array
    const nav = useNavigate(); // initiating nav object to be used in going back to project list

    // prefilling the initial imgSrc array with loading images
    const imgSrc = [];
    for (let i = 0; i < Number(length); i++) {
        imgSrc.push('https://miro.medium.com/v2/resize:fit:882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif')
    }

    const [project, setProject] = useState<ProjectEntry>({
        "id": "",
        "imgSrc": imgSrc,
        "name": "",
        "date": "",
        "medium": "",
        "about": ""
    });

    useEffect(() => {
        const header = document.querySelector(".header-container") as HTMLElement;
        header!.style.display = "none";

        EntryService.getEntryById(id!).then((project) => {
            console.log('ENTRY SERVICE')
            console.log(project)
            setProject(project);
        })
        // adding styling to the bullets and arrows
        setPaginationStyling();

        return (() => { header!.style.display = "block" }); // ensure that navigation bar is returned when the component dismounts
    }, [id])

    useEffect(() => {
        const swiperEl: SwiperContainer = document.querySelectorAll('swiper-container')[0]!;
        swiperEl!.swiper.update();
    }, [project]);

    return (
        <>
            <button className="project-desktop-detail-back-btn" onClick={() => { nav(-1) }}>
                <img src="/images/x.svg" />
            </button>
            <div className="project-desktop-detail">
                {
                    project ? // show project images only if project exists
                        <swiper-container init={false} navigation initial-slide={index} pagination space-between="30" >
                            {project.imgSrc.map((src, i) =>
                                <swiper-slide key={src + i}>
                                    <img className="swiper-image" src={src} />
                                </swiper-slide >
                            )}
                        </swiper-container>
                        : <>Project Not Found!</>
                }
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