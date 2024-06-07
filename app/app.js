import express from "express";
import ruta from "./routes/index.js";
import cors from "cors";
import path from "path";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());

const __dirname = path.join(process.cwd(),"app");
app.use(express.static(__dirname + '/public'));

console.log(__dirname);

app.use("/", ruta);

export default app;