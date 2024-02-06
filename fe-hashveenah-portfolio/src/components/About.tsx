import { Dispatch, SetStateAction, useEffect } from "react";

interface aboutProps {
    setLocation: Dispatch<SetStateAction<string>>;
}

function About(props: aboutProps) {
    useEffect(() => {
        props.setLocation('About')
    }, [props]);

    return (
        <div>
            About
        </div>
    );
}

export default About;