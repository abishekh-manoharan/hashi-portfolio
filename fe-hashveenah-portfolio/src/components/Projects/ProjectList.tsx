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
    useEffect(() => {
        console.log('getting projects UE firing')
        EntryService.getAllEntries()
            .then((res) => {
                console.log(res)
                setProjects(res as ProjectEntry[])
            })        
    }, []);


    return (
        <div className="projects-list">
            <br />
            {
                projects.map((proj, i) => {
                    return <Project key={proj.id} project={proj} index={i} length={data.length} />
                })
            }
        </div>
    );
}

export default ProjectList;

