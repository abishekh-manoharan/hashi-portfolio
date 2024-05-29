import { IVerifyOptions } from "passport-local";
//
// PASSPORT JS TYPES 
//
// type for the done callback function of the validator function
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type doneType = (error: any, user?: Express.User | false, options?: IVerifyOptions) => void;
// type for the user object in serialize function
export interface userType extends Express.User{
    id?: string;
}

// type for existing work
export interface ProjectEntry {
    id: string;
    imgSrc: string[];
    name: string;
    date: string;
    medium: string;
    about: string;
}

// type for new work
export type NewProjectEntry = Omit<ProjectEntry, 'id'>



// type for existing user
export interface ExistingUser {
    id: string,
    username: string,
    hash: string,
    salt: string,
    about: string,
    art: string
}

// type for new user
export interface newUser {
    username: string,
    password: string
}

// type for inbox messages
export interface Message {
    name: string;
    email: string;
    message: string;
}