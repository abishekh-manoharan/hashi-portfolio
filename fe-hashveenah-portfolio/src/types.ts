export interface ProjectEntry {
    id: string;
    imgSrc: string[];
    name: string;
    date?: string;
    medium: string;
    about?: string;
}

export interface Context { auth?: boolean; setAuth?: React.Dispatch<React.SetStateAction<boolean>> }