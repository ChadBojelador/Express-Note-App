import mongoose from "mongoose";


const noteSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    status:{type: String,
            enum:["completed","pending"],
            default:"pending", 
            required: true,
            }
})

const Note =  mongoose.model("Note", noteSchema);
export default Note;