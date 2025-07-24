import express from "express"
import {dbconnect} from "./config/db.js"
import notesRoutes from "./routes/notesRoutes.js"
const app = express();
await dbconnect();
const PORT = 3000
app.use(express.json());
app.use("/", notesRoutes)

app.listen(PORT, ()=>{
    console.log(`server alive at http://localhost:${PORT}`)
})

export default app;