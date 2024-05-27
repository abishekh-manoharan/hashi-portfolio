interface InboxProps {
    setLocation: React.Dispatch<React.SetStateAction<string>>;
}

function Inbox(props: InboxProps) {
    props.setLocation('inbox')

    return (
        <div>
            inbox component
        </div>
    );
}

export default Inbox;