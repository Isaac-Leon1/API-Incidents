import express from 'express'
import morgan from 'morgan'

//Rutas
import incidentRoutes from './routers/delinquency_routes.js'

const app = express()

//Variable
app.set('port',process.env.port || 3000);

//Middlewares
app.use(express.json());
app.use(morgan('dev'));

//Ruta principal
app.get('/',(req,res)=>{
    res.send("Server on")
});

app.use('/api/v1', incidentRoutes);

export default  app