import { Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../utils/context';
import userService from '../services/user';
import entryService from '../services/entry';
import Collection from './Collections/ Collection';
import { generateUniqueKey } from '../utils/helpers';
import { ProjectEntry, ProjectEntryWithImageKey } from '../types';
import mongoose from 'mongoose';

interface configurationProps {
    setLocation: Dispatch<SetStateAction<string>>;
}

function Configuration(props: configurationProps) {
    const [aboutMe, setAboutMe] = useState('about me');
    const [art, setArt] = useState('art');
    const [entries, setEntries] = useState<ProjectEntryWithImageKey[]>([]);
    // const idRef = useRef(0); // used to create unique key for new entry additions 

    const entriedToBeDeleted = useRef([]);

    const auth = useContext(AuthContext); // used to determine if user is authorized for cutomization page

    useEffect(() => {
        props.setLocation('Configuration')
    }, [props]);

    // prefilling form 
    useEffect(() => {
        userService.getUser().then(res => {
            setAboutMe(res[0].about);
            setArt(res[0].art)
        });
        entryService.getAllEntries().then(res => {
            // generate a new list of entries with each entry containing a src array with each src containing a unique key for mapping purposes.
            const updatedEntries: ProjectEntryWithImageKey[] = res.map((e) => {
                const updatedImgSrc = e.imgSrc.map((img) => { return { src: img.toString(), key: generateUniqueKey() } });
                const updatedEntry: ProjectEntryWithImageKey = { ...e, imgSrc: updatedImgSrc };
                return updatedEntry;
            })
            setEntries(updatedEntries);
        })

        setTimeout(() => { window.scrollTo(0, 0) }, 1000);
    }, []);

    const addNewCollectionButtonClickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();

        // idRef.current += 1; // updating idRef to get unique id for key

        const entriesWithEmptyAddition: ProjectEntryWithImageKey[] = entries.map(e => e);
        entriesWithEmptyAddition.push({
            id: String(new mongoose.Types.ObjectId()),
            imgSrc: [],
            name: "",
            date: "",
            medium: "",
            about: ""
        })

        setEntries(entriesWithEmptyAddition);
    }

    const submitButtonClickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();

        // check for validity issues (primarily for "required" functionality)
        const form = document.querySelector(".config") as HTMLSelectElement;
        if (!form.checkValidity()) {
            form.reportValidity();
            return; // break out of method if validity issues exist
        }

        // updating about and art properties of the user
        userService.patchUser({
            about: aboutMe,
            art: art
        }).then((res) => {
            console.log('patch user response:');
            console.log(res);
        });

        // updating the entries
        // convert entries to type with image keys not included in src array
        const entriesWithoutImageKey: ProjectEntry[] = entries.map((e) => { return { ...e, imgSrc: e.imgSrc.map(src => src.src) } });
        console.log('entries without image key')
        console.log(entriesWithoutImageKey)
        Promise.all(entriesWithoutImageKey.map((e) => {
            return entryService.patchEntry(e);
        })).then((values) => {
            console.log('patch entries response:');
            console.log(values);
        })

        // deleting entries in the entriedToBeDeleted ref
        Promise.all(
            entriedToBeDeleted.current.map((id) => {
                return entryService.deleteEntry(id);
            })
        ).then((res) => {
            console.log('delete outcome:');
            console.log(res);
        })
    }

    return (
        <>
            {auth.auth ?
                <form className="config">
                    <h3 className='config-headers'>Text</h3>
                    <label htmlFor="config-about" className='form-label' >About Me</label>
                    <textarea id="config-about" className="form-input" required rows={7} value={aboutMe} onChange={(e) => setAboutMe(e.target.value)} />
                    <br /><br />
                    <label htmlFor="config-about" className='form-label' >My Art</label>
                    <textarea id="config-about" className="form-input" required rows={7} value={art} onChange={(e) => setArt(e.target.value)} />
                    <br /><br />
                    <hr/><br />
                    <h3 className='config-headers'>Collections</h3>

                    {
                        entries.length > 0 ?
                            entries.map((e) => <Collection key={e.id} entry={e} i={e.id} setEntries={setEntries} entriesToBeDeleted={entriedToBeDeleted} />)
                            : <>No Collections</>
                    }
                    <button className="login-form-submit-btn config-add-new-collection-btn" onClick={addNewCollectionButtonClickHandler}>Add New Collection</button>
                    <input type="submit" className="login-form-submit-btn" onClick={submitButtonClickHandler} value="Submit" />
                </form>
                : <>Not Authorized</>}
        </>
    );
}

export default Configuration;