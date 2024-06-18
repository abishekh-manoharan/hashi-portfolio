import mongoose from 'mongoose';
const LinksSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    link: String,
    name: String,
    description: String
});
export default mongoose.model('Link', LinksSchema);
