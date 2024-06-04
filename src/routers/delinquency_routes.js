import {Router} from "express";
import { getAllIncidentController, getIncidentByIDController, createIncidentController, updateIncidentController, deleteIncidentController } from '../controllers/delinquency_controller.js';

const router = Router();

router.get('/incidents',getAllIncidentController);
router.get('/incidents/:id',getIncidentByIDController);
router.post('/incidents',createIncidentController);
router.put('/incidents/:id',updateIncidentController);
router.delete('/incidents/:id',deleteIncidentController);

export default router;