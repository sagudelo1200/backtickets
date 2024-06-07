import { pool } from "../../config/db.mysql.js";
import fs from "node:fs";
// import { tokenSign } from "../middlewares/middlewares.tickets.js";

//Crear ticket POST
export const crearTicket = async(req, res)=>{
    let info = req.body;

    const archivo = req.file;
    const desti=req.file.destination+archivo.originalname
    fs.renameSync(req.file.path, desti);
    console.log(desti);

    try {

        let resultado = await pool.query(` 
        insert into ticket (
        id, fecha, nombre_usuario, email_cliente, prioridad, mensaje, archivo) values
        (
            ${info.id}, '${info.fecha}',
            '${info.nombre_usuario}', '${info.email_cliente}',
            '${info.prioridad }', '${info.mensaje}',
            '${archivo.originalname}'
        )
    `);
    if(resultado[0].affectedRows > 0 ){
        res.json({
            respuesta:"ticket creado"
        })
    } else{
        res.json({
            respuesta:"no creado"
        })
    }

    } catch (error) {
        res.json({
            "error":error,
            "method": "post"
        })
    } 
 
}

//Mostrar ticket GET
export const mostrarTicket = async(req, res)=>{

    let id = req.params.id;

    try {
        const resultado = await pool.query(`select * from ticket where id = ${id}`);
 
        res.json(resultado[0]);
            
    } catch (error) {
        res.json({
            "error":error,
            "method": "get"
        })
}
}

//Actualizar ticket PUT
export const actualizarTicket = async(req, res)=>{
    let info = req.body;

    try {
        let resultado = await pool.query(` 
            update ticket
            set
            email_cliente = '${info.email_cliente}'
            where id = ${info.id}
    `);
    if(resultado[0].affectedRows > 0 ){
        res.json({
            respuesta:"ticket modoficado"
        })
    } else{
        res.json({
            respuesta:"no modifico nada"
        })
    }

    } catch (error) {
        res.json({
            "error":error,
            "method": "put"
        })
    } 
}

//Eliminar ticket DELTE
export const eliminarTicket = async(req, res)=>{
    let info = req.body;

    try {
        let resultado = await pool.query(` 
            delete from ticket
           where id = ${info.id}
    `);
    if(resultado[0].affectedRows > 0 ){
        res.json({
            respuesta:"ticket borrado"
        })
    } else{
        res.json({
            respuesta:"no borro nada"
        })
    }

    } catch (error) {
        res.json({
            "error":error,
            "method": "delete"
        })
    } 
}

//Lista completa de tickets GET
export const listarTicket = async(req, res)=>{

    try {
        const resultado = await pool.query("select * from ticket");
 
        res.json(resultado[0]);
            
    } catch (error) {
        res.json({
            "error":error,
            "method": "get"
        })
}
}

//Mostrar informe GET
export const mostrarInformes = async(req, res)=>{

    let id = req.params.id;

    try {
        const resultado = await pool.query(`select * from ticket where id = ${id}`);
 
        res.json(resultado[0]);
            
    } catch (error) {
        res.json({
            "error":error,
            "method": "get"
        })
}
}

//Mostrar ENCUESTA GET
export const mostrarEncuesta = async(req, res)=>{

    try {
        const resultado = await pool.query("select * from encuesta");
 
        res.json(resultado[0]);
            
    } catch (error) {
        res.json({
            "error":error,
            "method": "get"
        })
    }
}

//Crear encuesta POST
export const crearEncuesta = async(req, res)=>{
    let info = req.body;

    try {
        let resultado = await pool.query(` 
        insert into encuesta (
        id, satisfaccion, ayudarecibida, soluciondelproblema) values
        (
            ${info.id}, '${info.satisfaccion}',
            '${info.ayudarecibida }', '${info.soluciondelproblema}'
        )
    `);
    if(resultado[0].affectedRows > 0 ){
        res.json({
            respuesta:"encuesta creada"
        })
    } else{
        res.json({
            respuesta:"no creada"
        })
    }

    } catch (error) {
        res.json({
            "error":error,
            "method": "post"
        })
    } 
 
}

//Crear solucion POST
export const atencionTicket = async(req, res)=>{
    let info = req.body;

    try {
        let resultado = await pool.query(`
        insert into solucion (serie, estado_ticket, solucion, usuario) values
        (
             '${info.serie}',
            '${info.estado_ticket}', '${info.solucion}',
            '${info.usuario}'
           
        )
    `);
    if(resultado[0].affectedRows > 0 ){
        res.json({
            respuesta:"solucion creada"
        })
    } else{
        res.json({
            respuesta:"no creada"
        })
    }

    } catch (error) {
        res.json({
            "error":error,
            "method": "post"
        })
    } 
 
}

//CREAR comentarios POST
export const caracteristicas = async(req, res)=>{
    let info = req.body;

    try {
        let resultado = await pool.query(`
        insert into caracteristicas (comentario, caracteristica) values
        (
             '${info.comentario}',
            '${info.caracteristica}'
        )
    `);
    if(resultado[0].affectedRows > 0 ){
        res.json({
            respuesta:"comentario creada"
        })
    } else{
        res.json({
            respuesta:"no creado"
        })
    }

    } catch (error) {
        res.json({
            "error":error,
            "method": "post"
        })
    } 
 
}

//Lista completa de estado, soluciones GET
export const mostrarSolucion = async(req, res)=>{

    try {
        const resultado = await pool.query("select * from solucion");
 
        res.json(resultado[0]);
            
    } catch (error) {
        res.json({
            "error":error,
            "method": "get"
        })
}
}

//Actualizar soluiones y estado PUT
export const actualizarSolucion = async(req, res)=>{
    let info = req.body;

    try {
        let resultado = await pool.query(` 
            update solucion
            set
            estado_ticket = '${info.estado_ticket}'
            where serie =  '${info.serie}'
    `);
    if(resultado[0].affectedRows > 0 ){
        res.json({
            respuesta:"solucion modoficada"
        })
    } else{
        res.json({
            respuesta:"no modifico nada"
        })
    }

    } catch (error) {
        res.json({
            "error":error,
            "method": "put"
        })
    } 
}