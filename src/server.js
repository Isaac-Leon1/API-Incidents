import express from 'express'

const app = express()

//Variable
app.set('port',process.env.port || 3000)

//Middlewares
app.use(express.json())

//Ruta principal
app.get('/',(req,res)=>{
    res.send("Server on")
})

export default  app