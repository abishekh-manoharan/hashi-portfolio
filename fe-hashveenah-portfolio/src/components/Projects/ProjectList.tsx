import { Dispatch, SetStateAction, useEffect } from "react";
import Project from "./Project";
import data from '../../../data';
import { setPaginationStyling } from "../../utils/helpers";

interface projectProps {
    setLocation: Dispatch<SetStateAction<string>>;
}


function ProjectList(props: projectProps) {
    useEffect(() => {
        props.setLocation('Selected Works')
    }, [props]);

    useEffect(() => { // adding styling to the bullets
        setPaginationStyling();
    }, [])

    return (
        <div className="projects-list">
            <br />
            <Project project={data[0]}/>
            <Project project={data[1]}/>
        </div>
    );
}

export default ProjectList;

