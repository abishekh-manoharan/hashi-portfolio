import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { ProjectEntryWithImageKey } from '../../types';
import { generateUniqueKey } from '../../utils/helpers';
import Image from './Image';

interface CollectionProps {
    entry: ProjectEntryWithImageKey;
    i: number;
    setEntries: Dispatch<SetStateAction<ProjectEntryWithImageKey[]>>;
}

function Collection({ entry, i, setEntries }: CollectionProps) {
    const [name, setName] = useState(entry.name);
    const [date, setDate] = useState(entry.date);
    const [medium, setMedium] = useState(entry.medium);
    const [about, setAbout] = useState(entry.about);
    const [imgSrc, setImgSrc] = useState(entry.imgSrc);

    const idRef = useRef(0); // used to create unique key for new entry additions 

    useEffect(() => {
        // update the master entries list whenever the elements of the entries change
        setEntries(prevEntries => {
            return prevEntries.map((e, index) => {
                return index === i ? { id: entry.id, name, date, medium, about, imgSrc } : e;
            })
        })
    }, [name, date, medium, about, imgSrc]); // elements of the entries

    const deleteButtonClickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();

        setEntries(prevEntries => {
            return prevEntries.filter((e, index) => {
                return index !== i;
            })
        })
    }
    
    const addImageButtonClickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();

        idRef.current += 1;

        setImgSrc(prev => {
            return prev.concat({
                src: "",
                key: generateUniqueKey()
            });
        })
    }

    return (
        <div className="config-collections">
            <button onClick={deleteButtonClickHandler}> Delete Entry </button>
            <label htmlFor="config-collections-name" className='form-label'>Name</label>
            <input id="config-collections-name" className="form-input" type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ marginBottom: "10px" }} />

            <label htmlFor="config-collections-description" className='form-label'>Description</label>
            <textarea id="config-collections-description" className="form-input" rows={3} value={about} onChange={(e) => setAbout(e.target.value)} style={{ marginBottom: "10px" }} />

            <label htmlFor="config-collections-medium" className='form-label'>Medium</label>
            <input id="config-collections-medium" className="form-input" type="text" value={medium} onChange={(e) => setMedium(e.target.value)} style={{ marginBottom: "10px" }} />

            <label htmlFor="config-collections-date" className='form-label'>Date</label>
            <input id="config-collections-date" className="form-input" type="text" value={date} onChange={(e) => setDate(e.target.value)} style={{ marginBottom: "10px" }} />

            <label htmlFor="config-collections-image" className='form-label'>Images</label>
            {imgSrc.map((src, i, srcAll) => <Image key={src.key} src={src} i={i} srcAll={srcAll} setImgSrc={setImgSrc} />)}
            <button onClick={addImageButtonClickHandler}>Add new image</button>
            <br />
            <br />
            <br />
        </div>

    );
}

export default Collection;