import { NewProjectEntry } from "../types";

// parse the req.body of the post request to add a new project entry
// return body as a NewProjectEntry type if it exists and if all necessary values are present
// throws error otherwise
export const parseNewProjectEntry = (body: unknown): NewProjectEntry => {
    if (body && isNewProjectEntry(body)) { 
        return body; // 
    } else {
        throw new Error('invalid project entry. Ensure all properties exist.')
    }
}

// ensures that all necessary properties are included in the NewProjectEntry
const isNewProjectEntry = (body: unknown): body is NewProjectEntry => {
    if (!body || typeof body !== 'object') { // narrow 'body' down to object type
        throw new Error('incorrect or missing data');
    }

    return 'date' in body && 'imgSrc' in body && 'name' in body && 'date' in body && 'medium' in body && 'about' in body
}
