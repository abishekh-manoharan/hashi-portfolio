import crypto from 'node:crypto';

// hashes the given password and compares is to the stored hashed value. returns true if matching, false otherwise.
const verifyPassword = (password: string, hash: string, salt: string): Boolean => {
    const genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return genHash === hash;
}

export {
    verifyPassword
};