import mongoose from 'mongoose'

// URL
let URL = "mongodb+srv://isaac1leon:Gxum6RR4WeAfdnhY@cluster0.wbs4pjk.mongodb.net/APIncidents?retryWrites=true&w=majority"

// Conexion a la base de datos MongoDB
const connectMongoDB = async () =>{
    try {
        await mongoose.connect(URL)
        console.log("Base de datos conectada")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB // Exportar la conexion