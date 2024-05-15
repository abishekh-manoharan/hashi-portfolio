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

export interface Context { auth?: boolean; setAuth?: React.Dispatch<React.SetStateAction<boolean>> }