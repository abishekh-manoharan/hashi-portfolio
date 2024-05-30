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

export interface UserUpdateData {
    about: string,
    art: string
}

// type for inbox messages
export interface Message {
    _id: string,
    name: string;
    email: string;
    message: string;
}

export type newMessage = Omit<Message, '_id'>