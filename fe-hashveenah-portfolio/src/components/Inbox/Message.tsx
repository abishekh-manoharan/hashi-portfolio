import { isAxiosError } from "axios";
import { deleteOneMessage } from "../../services/inbox";
import { Dispatch, SetStateAction } from "react";
import { Message as MessageType } from "../../types";

interface messageComponentProps {
    message: string,
    email: string,
    name: string,
    id: string,
    setMessages: Dispatch<SetStateAction<MessageType[]>>
}


function Message({ message, email, name, id, setMessages }: messageComponentProps) {
    const deleteMessageHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
        
        // using inbox service to delete the message
        deleteOneMessage(id)
            .then(res => {
                console.log(res)
                setMessages(prevMessages => prevMessages.filter(msg => msg._id !== id));
            })
            .catch(e => {
                if (isAxiosError(e)) {
                    console.log(e)
                }
            })
    }


    return (
        <div className="message">
            <button onClick={deleteMessageHandler} className="config-collections-image-delete-btn">X</button>
            <p className='message-name'>{name}</p>
            <p className='message-email'>{email}</p>
            <p className='message-message'>{message}</p>
            <hr id="message-hr" />
        </div>
    );
}

export default Message;