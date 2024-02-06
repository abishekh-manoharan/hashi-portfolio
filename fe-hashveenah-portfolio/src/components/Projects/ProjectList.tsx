import { Dispatch, SetStateAction, useEffect } from "react";

interface projectProps {
    setLocation: Dispatch<SetStateAction<string>>;
}


function ProjectList(props: projectProps) {
    useEffect(() => {
        props.setLocation('Projects')
    }, [props]);


    return (
        <div>
            Project List
        </div>
    );
}

export default ProjectList;