import { Dispatch, SetStateAction, useEffect } from "react";
import Project from "./Project";
import data from '../../../data';

interface projectProps {
    setLocation: Dispatch<SetStateAction<string>>;
}


function ProjectList(props: projectProps) {
    useEffect(() => {
        props.setLocation('Selected Works')
    }, [props]);

    return (
        <div className="projects-list">
            <br />
            {
                data.map((proj, i) => {
                    return <Project project={proj} index={i} length={data.length}/>
                })
            }
        </div>
    );
}

export default ProjectList;

