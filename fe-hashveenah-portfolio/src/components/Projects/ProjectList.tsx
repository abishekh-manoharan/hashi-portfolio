import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Project from "./Project";
import data from '../../../data';
import EntryService from '../../services/entry';
import userService from '../../services/user';
import { ProjectEntry } from "../../types";

interface projectProps {
    setLocation: Dispatch<SetStateAction<string>>;
}


function ProjectList(props: projectProps) {
    const [projects, setProjects] = useState<ProjectEntry[]>([]);    
    const [artistStatement, setArtistStatement] = useState('');

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
    useEffect(() => {
        userService.getUser().then(res => {
            setArtistStatement(res[0].art)
        })
    }, [])

    return (
        <div className="projects-list">
            <div className="artist-statement">
            <p className="home-info-title">Artist's Statement</p>
                    <p className="home-info-content">{artistStatement}</p>
            </div>
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

