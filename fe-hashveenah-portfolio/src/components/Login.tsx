import React, { Dispatch, SetStateAction, useEffect } from 'react';

interface loginProps {
    setLocation: Dispatch<SetStateAction<string>>;
}

function Login(props: loginProps) {
    useEffect(() => {
        props.setLocation('Login')
    }, [props]);

    return (
        <div>
            <form method='POST' action="">
                <label htmlFor="unamee">Username</label>
                <input type='text' name='uname' /> <br/>

                <label htmlFor="pw">Password</label>
                <input type='text' name='pw' /> <br/>
                
                <input type='submit' />
            </form>
        </div>
    );
}

export default Login;