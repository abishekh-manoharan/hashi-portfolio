import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Link, Link as LinkType } from '../types';

interface LinkProps {
    link: LinkType;
    setLinks: Dispatch<SetStateAction<Link[]>>;
    links: Link[];
    linksToBeDeleted: React.MutableRefObject<Link[]>;
}

function LinkComponent(props: LinkProps) {
    const [name, setName] = useState(props.link.name);
    const [description, setDescription] = useState(props.link.description);
    const [link, setLink] = useState(props.link.link);

    // update the master links list whenever the states of the link update
    useEffect(() => {
        props.setLinks((prev) => {
            return prev.map(prevLink => prevLink._id === props.link._id ? {_id: props.link._id, name: name, description: description, link: link} : prevLink);
        });
    }, [name, description, link]);
    
    // update master list to exclude the link with the _id associated with this component if the delete button is clicked
    const deleteLinkButtonClickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
        
        props.setLinks((prev) => {
            return prev.filter(prevLink => prevLink._id !== props.link._id);
        });

        // add the link to the ref object containing links to be deleted. the object will be referred to when the submit button is clicked
        props.linksToBeDeleted.current.push(props.link);
    }


    return (
        <div>
             <label htmlFor="config-collections-name" className='form-label'>Name</label>
            <input id="config-collections-name" className="form-input" required type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="config-collections-medium" className='form-label'>Link</label>
            <input id="config-collections-medium" className="form-input" required type="text" value={link} onChange={(e) => setLink(e.target.value)} />

            <label htmlFor="config-collections-description" className='form-label'>Description</label>
            <textarea id="config-collections-description" required className="form-input" rows={6} value={description} onChange={(e) => setDescription(e.target.value)} />

            <button className="" onClick={deleteLinkButtonClickHandler}> Delete Link </button>
        </div>
    );
}

export default LinkComponent;