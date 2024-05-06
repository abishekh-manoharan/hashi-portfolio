import { Dispatch, SetStateAction, useContext, useEffect } from 'react';
import { AuthContext } from '../utils/context';

interface configurationProps {
    setLocation: Dispatch<SetStateAction<string>>;
}

function Configuration(props: configurationProps) {
    const auth = useContext(AuthContext);

    useEffect(() => {
        props.setLocation('Configuration')
    }, [props]);

    return (
        <>
            {auth.auth ? <>Authorized</>


                : <>Not Authorized</>}
        </>
    );
}

export default Configuration;