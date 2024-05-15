import { Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../utils/context';
import userService from '../services/user';
import entryService from '../services/entry';
import Collection from './Collections/ Collection';
import { ProjectEntry } from '../types';

interface configurationProps {
    setLocation: Dispatch<SetStateAction<string>>;
}

function Configuration(props: configurationProps) { 
    const [aboutMe, setAboutMe] = useState('about me');
    const [art, setArt] = useState('art');
    const [entries, setEntries] = useState<ProjectEntry[]>([]);
    const idRef = useRef(0); // used to create unique key for new entry additions 

    const auth = useContext(AuthContext); // used to determine if user is authorized for cutomization page

    useEffect(() => {
        props.setLocation('Configuration')
    }, [props]);
    
    // prefilling form 
    useEffect(() => {
        userService.getUser.then(res => {
            setAboutMe(res[0].about);
            setArt(res[0].art)
        });
        entryService.getAllEntries.then(res => {
            setEntries(res);
        })
    }, []);

    const addNewCollectionButtonClickHandler = (e: React.SyntheticEvent) => { 
        e.preventDefault();

        idRef.current += 1; // updating idRef to get unique id for key

        const entriesWithEmptyAddition: ProjectEntry[] = entries.map(e => e);
        entriesWithEmptyAddition.push({
            id: String(idRef.current),
            imgSrc: [],
            name: "",
            date: "",
            medium: "",
            about: ""
        })

        setEntries(entriesWithEmptyAddition);
    }

    return (
        <>
            <>{entries.map((e) => {
                return <>{e.name}<br/></>
            })}</>
            {auth.auth ?
                <form className="config">
                    <h3>Text</h3>
                    <label htmlFor="config-about" className='form-label'>About Me</label>
                    <textarea id="config-about" className="form-input" rows={5} value={aboutMe} onChange={(e) => setAboutMe(e.target.value)}/>
                    <br/><br/>
                    <label htmlFor="config-about" className='form-label'>My Art</label>
                    <textarea id="config-about" className="form-input" rows={5} value={art} onChange={(e) => setArt(e.target.value)} />
                    <br/><br/>
                    <h3>Collections</h3>
                    <button onClick={addNewCollectionButtonClickHandler}>Add New Collection</button>
                    {
                        entries.length > 0 ? 
                            entries.map((e, i) => <Collection key={e.id} entry={e} i={i} setEntries={setEntries}/>)
                        : <>No Collections</>
                    }
                    <button className="login-form-submit-btn">Sumit</button>
                </form>
                : <>Not Authorized</>} 
        </>
    );
}

export default Configuration;