export interface ProjectEntry {
    id: string;
    imgSrc: string[];
    name: string;
    date?: string;
    medium: string;
    about?: string;
}

// type for new work
export type NewProjectEntry = Omit<ProjectEntry, 'id'>


// type for Project entry that has a key for each image
export interface imageWithKey {
    src: string;
    key: string;
}

export interface ProjectEntryWithImageKey {
    id: string;
    imgSrc: imageWithKey[];
    name: string;
    date?: string;
    medium: string;
    about?: string;
}

export interface Context { auth?: boolean; setAuth?: React.Dispatch<React.SetStateAction<boolean>> }