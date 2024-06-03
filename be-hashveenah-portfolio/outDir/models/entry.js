import mongoose from 'mongoose';
const entrySchema = new mongoose.Schema({
    id: String,
    imgSrc: [{ type: String }],
    name: { type: String, required: true },
    date: String,
    medium: String,
    about: String,
});
entrySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});
const Entry = mongoose.model('ProjectEntry', entrySchema);
export default Entry;
