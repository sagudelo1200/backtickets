import { Router } from "express";
import rutaTicket from "./routes.tickets.js";
const ruta = Router();


ruta.use("/api",rutaTicket);


export default ruta