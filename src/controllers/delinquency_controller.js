import incidentModel from "../models/delinquency_model.js";

import {v4 as uuidv4} from 'uuid';

//Metodo para obtener una lista de los controladores obtenidos de la base de datos
const getAllIncidentController = async (req, res) => {
    try {
        const incidents = await incidentModel.getAllIncidentModel();
        res.status(200).json(incidents);
    } catch (error) {
        res.status(500).json(error);
    }
}

//Metodo para obtener un regitro por su ID
const getIncidentByIDController = async (req, res) => {
    try {
        const {id} = req.params;
        const incident = await incidentModel.getIncidentByIDModel(id);
        res.status(200).json(incident);
    } catch (error) {
        res.status(500).json(error);
    }
}

// Metodo para crear un nuevo registro en la base de datos
/*
* Tipo de delito
* Fecha
* Ubicación 
* Descripción 
* Nombres de los involucrados 
* Estado 
*/
const createIncidentController = async (req, res) => {
    try {
        const newIncident = {
            id: uuidv4(),
            ...req.body
        }
        const incident = await incidentModel.createIncidentModel(newIncident);
        res.status(200).json(incident);
    } catch (error) {
        res.status(500).json(error);
    }

}

const updateIncidentController = async(req, res)=> {
    const {id} = req.params
    try {
        const incident = await incidentModel.updateIncidentModel(id,req.body)
        const status = incident.error ? 404 : 200
        res.status(status).json(tour)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteIncidentController = async(req, res)=> {
    const {id} = req.params
    try {
        const incident = await incidentModel.deleteIncidentModel(id)
        const status = incident.error ? 404 : 200
        res.status(status).json(tour)
    } catch (error) {
        res.status(500).json(error)
    }
}


//Exportar las funciones
export {
    getAllIncidentController,
    getIncidentByIDController,
    createIncidentController,
    updateIncidentController,
    deleteIncidentController
}