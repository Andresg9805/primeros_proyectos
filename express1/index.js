// console.log("hola mundo")
const express=require('express');
const conectarBaseDeDatos=require('./config/db')
const aplicacion = express();
conectarBaseDeDatos();
aplicacion.use(express.json());
aplicacion.use('/api',require('./routes/proyecto_rutas'))
aplicacion.listen(4000,()=>{
    console.log("el servidor se esta ejecutando en el puerto 4000")
})