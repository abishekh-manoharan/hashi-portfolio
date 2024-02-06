import { Dispatch, SetStateAction, useEffect } from "react";

interface contactProps {
    setLocation: Dispatch<SetStateAction<string>>;
}

function Contact(props: contactProps) {
    useEffect(() => {
        props.setLocation('Contact')
    }, [props]);

    
    return (
        <div>
            Contact
        </div>
    );
}

export default Contact;