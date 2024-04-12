import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Project from "./Project";
import data from '../../../data';
import EntryService from '../../services/entry';
import { ProjectEntry } from "../../types";

interface projectProps {
    setLocation: Dispatch<SetStateAction<string>>;
}


function ProjectList(props: projectProps) {
    const [projects, setProjects] = useState<ProjectEntry[]>([]);

    // updating location for header
    useEffect(() => {
        props.setLocation('Selected Works')
    }, [props]);

    // getting project entries
    EntryService.getAllEntries
        .then((res) => {
            setProjects(res)
            console.log('projects')
            console.log(projects)
        })


    return (
        <div className="projects-list">
            <br />
            {
                projects.map((proj, i) => {
                    return <Project project={proj} index={i} length={data.length} />
                })
            }
        </div>
    );
}

export default ProjectList;

