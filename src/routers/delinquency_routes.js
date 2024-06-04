import {Router} from "express";
import { getAllIncidentController, getIncidentByIDController, createIncidentController } from '../controllers/deliquency_controller.js';

const router = Router();

router.get('/incidents',getAllIncidentController);
router.get('/incidents/:id',getIncidentByIDController);
router.post('/incidents',createIncidentController);

export default router;