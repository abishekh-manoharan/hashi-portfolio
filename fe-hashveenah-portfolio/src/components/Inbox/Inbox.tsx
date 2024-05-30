import { useEffect, useState } from "react";
import { deleteAllMessages, getAllMessages } from "../../services/inbox";
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

    const deleteAllClickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();

        deleteAllMessages()
            .then(res => {
                console.log(res)
                if(res.acknowledged) {
                    setMessages([]);
                }
            });
    }

    return (
        <div className="inbox">
            <h1>Inbox</h1>
            <button onClick={deleteAllClickHandler} className="config-collections-image-delete-btn inbox-delete-all">Delete All</button>
            {/* // inbox header: message - name - email */}
            {/* // inbox header: desktop only*/}

            {/* // message component  */}
            {messages.map(msg => {
                console.log(msg)
                return <MessageC key={msg._id} id={msg._id} message={msg.message} name={msg.name} email={msg.email} setMessages={setMessages} />
            })}
        </div>
    );
}

export default Inbox;