import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { sendMessage } from "../services/inbox";

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

        const messageToSend = { name, message, email };

        sendMessage(messageToSend)
            .then(res => {
                if (res) {
                    setName('');
                    setEmail('');
                    setMessage('');

                    // display error message if message doesn't send
                    const errMsg = document.querySelector('.contact-form .success-message');
                    errMsg?.classList.toggle("display-block");

                    setTimeout(() => {
                        errMsg?.classList.toggle("display-block");
                    }, 2000)

                } else {
                    // display error message if message doesn't send
                    const errMsg = document.querySelector('.contact-form .error-message');
                    errMsg?.classList.toggle("display-block");

                    setTimeout(() => {
                        errMsg?.classList.toggle("display-block");
                    }, 2000)

                }
            });
    }
    return (
        <div className="contact">
            {/* <label className="form-label" htmlFor="username">E-Mail</label> */}
            <img className="contact-img-desktop" src="/images/contact-desktop.jpeg" />
            <div className="contact-info">
                <hr />
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
            <form className="contact-form">
                <div className="contact-header">
                    <p className="contact-header-text">
                        Get in touch
                    </p>
                    <p className="contact-header-subtext">
                        Leave me a message and i'll get back to you through the email you provide!
                    </p>
                </div>
                <input className="form-input" value={name} onChange={(e) => { setName(e.target.value) }} type='text' name='name' placeholder='Full Name' required /> <br />
                <input className="form-input" value={email} onChange={(e) => { setEmail(e.target.value) }} type='email' name='email' placeholder='E-Mail' required /> <br />
                <textarea className="form-input" value={message} onChange={(e) => { setMessage(e.target.value) }} name='message' rows={10} placeholder='Message.....' required /><br />
                <button type="submit" onClick={submitContactMessageHandler} className="login-form-submit-btn config-add-new-collection-btn" >Send</button>
                <p className="error-message">Error sending message. Please try again later.</p>
                <p className="success-message">Message Sent</p>
            </form>
        </div>
    );
}

export default Contact;