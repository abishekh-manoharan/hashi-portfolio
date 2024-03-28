import mongoose from "mongoose";

const schema = new mongoose.Schema({
    id: { type: String},
    username: String,
    hash: String,
    salt: String,
})

const User = mongoose.model('User', schema);

export default User;


