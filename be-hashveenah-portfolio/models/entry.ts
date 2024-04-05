import mongoose from 'mongoose';

const entrySchema = new mongoose.Schema({
    id: String,
    imgSrc: [{ type: String }],
    name: { type: String , required: true},
    date: String,
    medium: String,
    about: String,
});

const Entry = mongoose.model('ProjectEntry', entrySchema);

export default Entry;