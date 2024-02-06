import { Dispatch, SetStateAction, useEffect } from "react";

interface projectProps {
    setLocation: Dispatch<SetStateAction<string>>;
}


function Project(props: projectProps) {
    useEffect(() => {
        props.setLocation('project')
    }, [props]);

    return (
        <div>
            Project
        </div>
    );
}

export default Project;