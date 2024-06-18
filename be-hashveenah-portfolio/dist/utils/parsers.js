export const parseLink = (body) => {
    if (body && isLink(body)) {
        return body;
    }
    throw new Error('invalid link entry. Ensure all properties exist.');
};
const isLink = (body) => {
    if (!body || typeof (body) !== 'object') {
        throw new Error('incorrect or missing data');
    }
    return '_id' in body && 'link' in body && 'name' in body && 'description' in body;
};
// parse the req.body of the post request to add a new project entry
// return body as a NewProjectEntry type if it exists and if all necessary values are present
// throws error otherwise
export const parseNewProjectEntry = (body) => {
    if (body && isNewProjectEntry(body)) {
        return body; // 
    }
    else {
        throw new Error('invalid project entry. Ensure all properties exist.');
    }
};
// ensures that all necessary properties are included in the NewProjectEntry
const isNewProjectEntry = (body) => {
    if (!body || typeof body !== 'object') { // narrow 'body' down to object type
        throw new Error('incorrect or missing data');
    }
    return 'date' in body && 'imgSrc' in body && 'name' in body && 'date' in body && 'medium' in body && 'about' in body;
};
// parse the req.body of a post request to register a new user
// return body as a NewUser type if it exists and if all necessary values are present
// throws error otherwise
export const parseNewUser = (body) => {
    if (body && isNewUser(body)) {
        return body;
    }
    else {
        throw new Error('invalid new user. Ensure all properties exist.');
    }
};
// ensures that all necessary properties are included in the NewUser
const isNewUser = (body) => {
    if (!body || typeof (body) !== 'object') {
        throw new Error('incorrect or missing data');
    }
    return 'username' in body && 'password' in body;
};
export const parseMessage = (msg) => {
    if (msg && isMessage(msg)) {
        return msg;
    }
    throw new Error('Invalid message object. Ensure all values are included.');
};
const isMessage = (msg) => {
    if (!msg || typeof (msg) !== 'object') {
        throw new Error('missing or incorrect data');
    }
    return 'name' in msg && 'email' in msg && 'message' in msg;
};
