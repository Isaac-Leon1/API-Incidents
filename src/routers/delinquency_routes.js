import {Router} from "express";
import { 
    getAllIncidentController, 
    getIncidentByIDController, 
    createIncidentController, 
    updateIncidentController, 
    deleteIncidentController
} from '../controllers/delinquency_controller.js';

// Instanciar Router
const router = Router();

// Rutas
router.get('/incidents',getAllIncidentController); // Obtener todos los incidentes
router.get('/incidents/:id',getIncidentByIDController); // Obbtener un incidente por su ID
router.post('/incidents',createIncidentController); // Crear un nuevo registro de incidente
router.put('/incidents/:id',updateIncidentController); // Actualizar un incidente por su ID
router.delete('/incidents/:id',deleteIncidentController); // Eliminar un incidente por su ID

// Exportar el router
export default router;