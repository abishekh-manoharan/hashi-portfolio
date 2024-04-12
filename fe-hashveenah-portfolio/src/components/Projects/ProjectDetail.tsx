import { useNavigate, useParams } from "react-router-dom";
// import data from '../../../data';
import { useEffect, useState } from "react";
import { setPaginationStyling } from "../../utils/helpers";
import EntryService from '../../services/entry';
import { ProjectEntry } from "../../types";

function ProjectDetail() {
    const { id, index } = useParams() // id: id of the project. index: index of the image that was clicked in the array
    const nav = useNavigate(); // initiating nav object to be used in going back to project list
    
    const [project, setProject] = useState<ProjectEntry>({
        id: '',
        imgSrc: [''],
        name: '',
        date: '',
        medium: '',
        about: '',
    });


    useEffect(() => {
        // adding styling to the bullets and arrows
        setPaginationStyling();

        const header = document.querySelector(".header-container") as HTMLElement;
        header!.style.display = "none";

        EntryService.getEntryById(id!).then((project) => {
            console.log('ENTRY SERVICE')
            console.log(project)
            setProject(project);
        })
        
        return (() => { header!.style.display = "block" }); // ensure that navigation bar is returned when the component dismounts

    }, [id])



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