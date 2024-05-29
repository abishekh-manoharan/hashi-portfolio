import mongoose from 'mongoose';

const inboxSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

export default mongoose.model('Message', inboxSchema);
