import express from 'express'

//Rutas
import incidentRoutes from './routers/delinquency_routes.js'

//Inicializacion
const app = express()

//Variable
app.set('port',process.env.port || 3000);

//Middlewares
app.use(express.json());

//Ruta principal
app.get('/',(req,res)=>{
    res.send("Server on")
});

app.use('/api/v1', incidentRoutes);

export default  app