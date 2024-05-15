import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ProjectEntry } from '../../types';
import Image from './Image';

interface CollectionProps {
    entry: ProjectEntry;
    i: number;
    setEntries: Dispatch<SetStateAction<ProjectEntry[]>>;
}

function Collection({ entry, i, setEntries }: CollectionProps) {
    const [name, setName] = useState(entry.name);
    const [date, setDate] = useState(entry.date);
    const [medium, setMedium] = useState(entry.medium);
    const [about, setAbout] = useState(entry.about);
    const [imgSrc, setImgSrc] = useState(entry.imgSrc);

    useEffect(() => {
        // update the master entries list
        setEntries(prevEntries => {
            return prevEntries.map((e, index) => {
                return index === i ? { id: entry.id, name, date, medium, about, imgSrc } : e;
            })
        })
    }, [name, date, medium, about, imgSrc]);

    const deleteButtonClickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();

        setEntries(prevEntries => {
            return prevEntries.filter((e, index) => {
                return index !== i;
            })
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
            {imgSrc.map((src, i, srcAll) => <Image key={src} src={src} i={i} srcAll={srcAll} setImgSrc={setImgSrc} />)}

            <br />
            <br />
            <br />
        </div>

    );
}

export default Collection;