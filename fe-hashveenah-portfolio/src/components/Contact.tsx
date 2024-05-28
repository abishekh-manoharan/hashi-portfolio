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

        const form = document.querySelector(".contact-form") as HTMLSelectElement;
        if (!form.checkValidity()) {
            form.reportValidity(); // reports on validity issues
            return; // breaks out of method if validity issues exist
        }
    }
    return (
        <div className="contact">
            {/* <label className="form-label" htmlFor="username">E-Mail</label> */}
            <img className="contact-img-desktop" src="/images/contact-desktop.jpeg" />
            <div className="contact-info">
                <hr/>
                {/* <img src="/images/moose.jpg" className="contact-info-background"/> */}
                <img className="contact-info-img-mobile" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                <div className="contact-info-entry">
                    <img className="contact-info-entry-logo" src="/images/mail-logo.svg" />
                    <img className="contact-info-entry-logo-dark" src="/images/mail-logo-dark.svg" />
                    <div className="contact-info-entry-header">
                        Email
                    </div>
                    <div className="contact-info-entry-value">
                        hashveenah@gmail.com
                    </div>
                </div>
                <div className="contact-info-entry">
                    <img className="contact-info-entry-logo" src="/images/map-pin-logo.svg" />
                    <img className="contact-info-entry-logo-dark" src="/images/map-pin-logo-dark.svg" />
                    <div className="contact-info-entry-header">
                        Based In
                    </div>
                    <div className="contact-info-entry-value">
                        Toronto, Ontario
                    </div>
                </div>
                
            </div>
            <img src="/public/images/vine.png" className="vineArt" alt="" />
            <form className="contact-form">
                <div className="contact-header">
                    <p className="contact-header-text">
                        Get in touch
                    </p>
                </div>
                <input className="form-input" onChange={(e) => { setName(e.target.value) }} type='text' name='name' placeholder='Full Name' required /> <br />
                <input className="form-input" onChange={(e) => { setEmail(e.target.value) }} type='email' name='email' placeholder='E-Mail' required /> <br />
                <textarea className="form-input" onChange={(e) => { setMessage(e.target.value) }} name='message' rows={10} placeholder='Message.....' required /><br />
                <button type="submit" onClick={submitContactMessageHandler} className="login-form-submit-btn config-add-new-collection-btn" >Send</button>
            </form>
        </div>
    );
}

export default Contact;