import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    id: { type: String },
    username: { type: String, require: true },
    hash: String,
    salt: String,
    about: String,
    art: String
});
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});
const User = mongoose.model('User', userSchema);
export default User;
