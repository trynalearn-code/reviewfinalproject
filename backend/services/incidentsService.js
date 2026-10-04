import { deleteIncidentRepo, findAllIncidentsRepo, findOneIncidentRepo, insertIncidentRepo, updateIncidentRepo } from "../repos/incidentsRepo.js";

export async function findAllIncidentsService() {
    const hasTitle = []
    const result = await findAllIncidentsRepo()
    for (const line of result) {
        if (line.title) {
            hasTitle.push(line)
        }
    }
    return hasTitle
}

export async function insertIncidentService(data) {
    return await insertIncidentRepo(data)
}

export async function findOneIncidentService(id) {
    return await findOneIncidentRepo(id)
}

export async function updateIncidentService(id, data) {
    return await updateIncidentRepo(id, data)
}

export async function deleteIncidentService(id) {
    if(!id){
        return "there is no id given"
    }
    const result = await deleteIncidentRepo(id)
    return result
}