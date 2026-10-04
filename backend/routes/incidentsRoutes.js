import { deleteIncidentController, findAllIncidentsController, findOneIncidentController, insertIncidentController, updateIncidentController } from "../controllers/incidentController.js";
import { Router } from "express";

const router = Router()

router.get("/incidents", findAllIncidentsController)
router.post("/incidents", insertIncidentController)
router.get("/incidents/:id", findOneIncidentController)
router.patch("/incidents/:id", updateIncidentController)
router.delete("/incidents/:id", deleteIncidentController)

export default router
