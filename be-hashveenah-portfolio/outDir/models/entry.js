"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const entrySchema = new mongoose_1.default.Schema({
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
const Entry = mongoose_1.default.model('ProjectEntry', entrySchema);
exports.default = Entry;
