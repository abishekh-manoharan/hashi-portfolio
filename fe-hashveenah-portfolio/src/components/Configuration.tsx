import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../utils/context';
import userService from '../services/user';
import Collection from './Collections/ Collection';

interface configurationProps {
    setLocation: Dispatch<SetStateAction<string>>;
}

function Configuration(props: configurationProps) {
    const [aboutMe, setAboutMe] = useState('about me');

    const auth = useContext(AuthContext);

    useEffect(() => {
        props.setLocation('Configuration')
    }, [props]);

    useEffect(() => {
        userService.getUser.then(res => console.log(res));
    }, []);

    return (
        <>
            {auth.auth ?
                <form className="config">
                    <h3>Text</h3>
                    <label htmlFor="config-about" className='form-label'>About Me</label>
                    <textarea id="config-about" className="form-input" rows={5} value={aboutMe} onChange={(e) => setAboutMe(e.target.value)}/>
                    <br/><br/>
                    <label htmlFor="config-about" className='form-label'>My Art</label>
                    <textarea id="config-about" className="form-input" rows={5} value={'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello'} />
                    <br/><br/>
                    <h3>Collections</h3>
                    {/* <label htmlFor="config-about" className='form-label'>Collections</label> */}
                    <Collection/>
                    <button className="login-form-submit-btn">Sumit</button>
                </form>
                : <>Not Authorized</>}
        </>
    );
}

export default Configuration;