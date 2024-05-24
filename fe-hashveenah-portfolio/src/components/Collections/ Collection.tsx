import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ProjectEntryWithImageKey } from '../../types';
import { generateUniqueKey } from '../../utils/helpers';
import Image from './Image';

interface CollectionProps {
    entry: ProjectEntryWithImageKey;
    i: string;
    setEntries: Dispatch<SetStateAction<ProjectEntryWithImageKey[]>>;
    entriesToBeDeleted: React.MutableRefObject<string[]>;
}

function Collection({ entry, i, setEntries, entriesToBeDeleted }: CollectionProps) {
    const [name, setName] = useState(entry.name);
    const [date, setDate] = useState(entry.date);
    const [medium, setMedium] = useState(entry.medium);
    const [about, setAbout] = useState(entry.about);
    const [imgSrc, setImgSrc] = useState(entry.imgSrc);

    // const idRef = useRef(0); // used to create unique key for new entry additions 

    // update the master entries list whenever the elements of the entries change
    useEffect(() => {
        setEntries(prevEntries => {
            return prevEntries.map((e) => {
                return e.id === i ? { id: entry.id, name, date, medium, about, imgSrc } : e;
            })
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, date, medium, about, imgSrc]); // elements of the entries

    const deleteButtonClickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();

        // adding the id of the current collection into the ref that holds ids of collections that are to be deleted
        entriesToBeDeleted.current.push(i);

        // remove the deleted entry from the master list
        setEntries(prevEntries => {
            return prevEntries.filter((e) => {
                return e.id !== i;
            })
        })
    }

    const addImageButtonClickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();

        // idRef.current += 1;

        setImgSrc(prev => {
            return prev.concat({
                src: "",
                key: generateUniqueKey()
            });
        })
    }

    return (
        <div className="config-collections">

            <label htmlFor="config-collections-name" className='form-label'>Name</label>
            <input id="config-collections-name" className="form-input" required type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="config-collections-description" className='form-label'>Description</label>
            <textarea id="config-collections-description" required className="form-input" rows={6} value={about} onChange={(e) => setAbout(e.target.value)} />

            <label htmlFor="config-collections-medium" className='form-label'>Medium</label>
            <input id="config-collections-medium" className="form-input" required type="text" value={medium} onChange={(e) => setMedium(e.target.value)} />

            <label htmlFor="config-collections-date" className='form-label'>Date</label>
            <input id="config-collections-date" className="form-input" required type="text" value={date} onChange={(e) => setDate(e.target.value)} />

            <label htmlFor="config-collections-image" className='form-label'>Images</label>
            {imgSrc.map((src, i, srcAll) => <Image key={src.key} id={src.key} src={src} i={i} srcAll={srcAll} setImgSrc={setImgSrc} />)}
            <button className="config-new-img-btn" onClick={addImageButtonClickHandler}>Add new image</button> <br /><br />
            <button className="config-delete-entry-btn" onClick={deleteButtonClickHandler}> Delete Entry </button>
            <br />
            <br />
            <br />
        </div>

    );
}

export default Collection;