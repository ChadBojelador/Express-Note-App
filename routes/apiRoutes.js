import express from "express";
import { getNotes, 
         addNote,
         updateNote, 
         getNote, 
         deleteNote
       } from "../controllers/noteController.js";

const router = express.Router();

router.get("/api/notes", getNotes);
router.post("/api/notes", addNote);
router.get("/api/notes/:id", getNote);
router.put("/api/notes/:id", updateNote);
router.delete("/api/notes/:id", deleteNote)


export default router;