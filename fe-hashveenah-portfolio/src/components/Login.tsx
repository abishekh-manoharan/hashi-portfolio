import { Dispatch, SetStateAction, useEffect } from 'react';

interface loginProps {
    setLocation: Dispatch<SetStateAction<string>>;
}

function Login(props: loginProps) {
    useEffect(() => {
        props.setLocation('Login')
    }, [props]);

    return (
        <div className="login-form-parent">
            <form method='POST' action="" className="login-form">
                <h1 className="login-form-header"> Login </h1>

                <label className="login-form-label" htmlFor="username">Username</label>
                <input className="login-form-input" type='text' name='username' placeholder='Enter your username' required/> <br/>

                <label className="login-form-label" htmlFor="password">Password</label>
                <input className="login-form-input" type='text' name='password' placeholder='Enter your password' required/> <br/>
                
                <input className="login-form-submit-btn" type='submit' value="Login"/>
            </form>
        </div>
    );
}

export default Login;