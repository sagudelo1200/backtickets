import express from "express";
import ruta from "./routes/index.js";
import cors from "cors";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());

app.use("/", ruta);

export default app;