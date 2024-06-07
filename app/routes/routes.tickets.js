import { Router, json } from "express";
import multer from "multer";


//importar las variables
import { crearTicket, mostrarTicket, listarTicket, actualizarTicket, eliminarTicket, 
    mostrarInformes, mostrarEncuesta, crearEncuesta, atencionTicket, caracteristicas,
    mostrarSolucion, actualizarSolucion} from "../controllers/controllers.tickets.js";

//Declarar variables
const rutaTicket = Router();
// const upload = multer({dest : "app/public/uploads/"})

//Para ir a cada ruta de los tickets
rutaTicket.post("/tickets", crearTicket);
rutaTicket.get("/tickets/:id", mostrarTicket);
rutaTicket.get("/tickets/", listarTicket);
rutaTicket.put("/tickets",  actualizarTicket);
rutaTicket.delete("/tickets", eliminarTicket);
rutaTicket.get("/informes", mostrarInformes);
rutaTicket.post("/encuesta", crearEncuesta);
rutaTicket.get("/encuesta", mostrarEncuesta);
rutaTicket.post("/solucion",  atencionTicket);
rutaTicket.get("/solucion",  mostrarSolucion);
rutaTicket.put("/solucion",  actualizarSolucion);
rutaTicket.post("/caracteristicas", caracteristicas)

//Exportar rutas
export default rutaTicket;