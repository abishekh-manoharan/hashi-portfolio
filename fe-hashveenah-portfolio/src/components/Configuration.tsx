import { Dispatch, SetStateAction, useEffect } from 'react';

interface configurationProps {
    setLocation: Dispatch<SetStateAction<string>>;
}

function Configuration(props: configurationProps) {
    useEffect(() => {
        props.setLocation('Configuration')
    }, [props]);

    return (
        <>
            Config
        </>
    );
}

export default Configuration;