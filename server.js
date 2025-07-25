import express, { urlencoded } from "express"
import {dbconnect} from "./config/db.js"
import apiRoutes from "./routes/apiRoutes.js"
import pageRoutes from "./routes/pageRoutes.js"
import { configureViewEngine } from "./config/ejs.js";

const app = express();

await dbconnect();
configureViewEngine(app)
const PORT = process.env.PORT

app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(express.json());
app.use("/", apiRoutes)
app.use("/", pageRoutes)

app.listen(PORT, ()=>{
    console.log(`server alive at http://localhost:${PORT}`)
})

export default app;