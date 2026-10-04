import { deleteIncidentService, findAllIncidentsService, findOneIncidentService, insertIncidentService, updateIncidentService } from "../services/incidentsService.js";

export async function findAllIncidentsController(req, res){
    try {
        const result = await findAllIncidentsService()
        return res.status(200).json({
            "success":true,
            "data":result
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            "success":false,
            "data":"server error"
        })
    }
}

export async function insertIncidentController(req, res) {
        try {
        const result = await insertIncidentService(req.body)
        return res.status(201).json({
            "success":true,
            "data":result
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            "success":false,
            "data":"server error"
        })
    }
}

export async function findOneIncidentController(req, res){
    try {
        const result = await findOneIncidentService(req.params.id)
        return res.status(200).json({
            "success":true,
            "data":result
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            "success":false,
            "data":"server error"
        })
    }
}

export async function updateIncidentController(req, res) {
    try {
        const result = await updateIncidentService(req.params.id, req.body)
        return res.status(200).json({
            "success":true,
            "data":result
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            "success":false,
            "data":"server error"
        })
    }
}

export async function deleteIncidentController(req, res) {
    try {
        await deleteIncidentService(req.params.id)
        return res.status(200).json({
            "success":true,
            "message": "you have deleted the id"
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            "success":false,
            "data":"server error"
        })
    }
}