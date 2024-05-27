import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface contactProps {
    setLocation: Dispatch<SetStateAction<string>>;
}

function Contact(props: contactProps) {
    useEffect(() => {
        props.setLocation('Contact')
    }, [props]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submitContactMessageHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('button clicked')
    }
    return (
        <div className="contact">
            {/* <label className="form-label" htmlFor="username">E-Mail</label> */}
            <div className="contact-info">
                {/* <img src="/images/moose.jpg" className="contact-info-background"/> */}
                <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="contact-info-background" />
                <div className="contact-info-entry">
                    <img className="contact-info-entry-logo" src="/images/mail-logo.svg" />
                    <div className="contact-info-entry-header">
                        Email
                    </div>
                    <div className="contact-info-entry-value">
                        hashveenah@gmail.com
                    </div>
                </div>
                <div className="contact-info-entry">
                    <img className="contact-info-entry-logo" src="/images/map-pin-logo.svg" />
                    <div className="contact-info-entry-header">
                        Based In
                    </div>
                    <div className="contact-info-entry-value">
                        Toronto, Ontario
                    </div>
                </div>
            </div>
            <div className="contact-header">
                <p className="contact-header-text">
                    Get in touch
                </p>
            </div>
            <input className="form-input" onChange={(e) => { setName(e.target.value) }} type='text' name='name' placeholder='Full Name' required /> <br />
            <input className="form-input" onChange={(e) => { setEmail(e.target.value) }} type='email' name='email' placeholder='E-Mail' required /> <br />
            <textarea className="form-input" onChange={(e) => { setMessage(e.target.value) }} name='message' rows={5} placeholder='Message.....' required /><br />
            <button type="submit" onClick={submitContactMessageHandler} className="login-form-submit-btn config-add-new-collection-btn" >Contact</button>
        </div>
    );
}

export default Contact;