import app from './server.js'
import conexionMongoDB from './database.js';

conexionMongoDB(); // Iniciar la conexion a MongoDB Atlas
app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://localhost:${app.get('port')}`);
})