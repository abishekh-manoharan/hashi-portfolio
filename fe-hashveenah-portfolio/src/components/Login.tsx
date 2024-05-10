import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import authService from '../services/auth';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../utils/context';

interface loginProps {
    setLocation: Dispatch<SetStateAction<string>>;
}

function Login(props: loginProps) {
    const auth = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        props.setLocation('Login')
    }, [props]);

    const formSubmissionHandler = (e: React.SyntheticEvent) => {
        e.stopPropagation();

        authService.login(username, password).then(res => {
            if (res === 'success') {
                auth.setAuth!(true);
            }
        });
    }

    return (
        <>
            {auth.auth ? <Navigate to="/configuration"/> : <></>}
            <div className="login-form-parent">
                <form method='POST' className="login-form">
                    <h1 className="login-form-header"> Login </h1>

                    <label className="form-label" htmlFor="username">Username</label>
                    <input className="form-input" onChange={(e) => { setUsername(e.target.value) }} type='text' name='username' placeholder='Enter your username' required /> <br />

                    <label className="form-label" htmlFor="password">Password</label>
                    <input className="form-input" onChange={(e) => { setPassword(e.target.value) }} type='password' name='password' placeholder='Enter your password' required /> <br />

                    <input className="login-form-submit-btn" type='button' onClick={formSubmissionHandler} value="Login" />
                </form>
            </div>
        </>
    );
}

export default Login;