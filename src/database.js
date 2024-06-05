import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

// URL
let URL = process.env.URL || ""
const connectMongoDB = async () =>{
    try {
        await mongoose.connect(URL)
        console.log("Base de datos conectada")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB // Exportar la conexion