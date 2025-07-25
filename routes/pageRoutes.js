import Note from "../models/notesSchema.js"
import express from "express";
const router = express.Router();

router.get("/",async(req,res)=>{
    let notes = await Note.find()
    res.render("notes", {notes})
} )

export default router;