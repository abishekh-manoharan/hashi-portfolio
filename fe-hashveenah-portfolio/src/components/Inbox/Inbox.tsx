import { useEffect, useState } from "react";
import { getAllMessages } from "../../services/inbox";
import { Message } from "../../types";
import MessageC from "./Message";

interface InboxProps {
    setLocation: React.Dispatch<React.SetStateAction<string>>;
}

function Inbox(props: InboxProps) {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        props.setLocation('inbox')
        
        getAllMessages()
            .then(res => setMessages(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className="inbox">
            <h1>Inbox</h1>
            {/* // inbox header: message - name - email */}
            {/* // inbox header: desktop only*/}

            {/* // message component  */}
            {messages.map(msg => {
                console.log(msg)
                return <MessageC key={msg._id} id={msg._id} message={msg.message} name={msg.name} email={msg.email} setMessages={setMessages}/>
            })}
        </div>
    );
}

export default Inbox;