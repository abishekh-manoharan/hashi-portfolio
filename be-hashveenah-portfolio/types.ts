import { IVerifyOptions } from "passport-local";
//
// PASSPORT JS TYPES 
//
// type for the done callback function of the validator function
export type doneType = (error: any, user?: Express.User | false, options?: IVerifyOptions) => void;
// type for the user object in serialize function
export interface userType extends Express.User{
    id?: string;
}