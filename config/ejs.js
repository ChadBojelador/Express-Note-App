import path from "path"
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)

export const configureViewEngine=(app)=>{
app.set("view engine", "ejs");
app.set("views", path.join(_dirname, "../views"))

}

