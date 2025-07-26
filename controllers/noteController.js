
import Note from "../models/notesSchema.js"

export const getNotes= async(req,res) => {

    try{
        const notes = await Note.find();
        res.status(200).json({notes});
    }
    catch(error){
        res.status(500).json("failed to fetch notes")
    }
}
export const addNote= async(req,res)=>{
    const {title, description, status} = req.body;
    const newNote = new Note ({
        title,
        description,
        status
    })
    
    try{
        await newNote.save()
        res.status(201).json({message: "Note added", newNote})
    }
    catch(error){
        res.status(400).json({message:"Note error"})
    }
}

export const getNote = async(req,res)=>{
    const {id} = req.params;
    try {
        const note = await Note.findById(id); 
        if (!note) return res.status(404).json({message: "Note not found"});
        res.status(200).json(note);
    }
    catch(error){
        res.status(400).json({message:"cannot get note", error: error.message})
    }
}


export const deleteNote = async(req,res)=>{
    const {id} = req.params;
    try{
        await Note.findByIdAndDelete(id);
        return res.status(200).json({message:"delete successful"})
    }
    catch(error){
        return res.status(400).json({message: "note not deleted"})
    }
}

export const updateNote = async (req, res)=>{
    const {id} = req.params;
    const updates = req.body;

        try{
         const note = await Note.findById(id)
            if(!note){
                return res.status(400).json({message: "cannot find the note"})
            }
                 
                  if (updates.title !== undefined) note.title = updates.title;
                  if (updates.description !== undefined) note.description = updates.description;
                  if (updates.status !== undefined) note.status = updates.status;

              
                  await note.save();

                        res.status(200).json({message: "note updated", note})
        }
        catch(error){
            res.status(400).json({message:"cannot update"})
        }
}


