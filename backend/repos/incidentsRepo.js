import db from "../db.js";
import {ObjectId} from "mongodb"
const incidents = db.collection('incident');

export async function findAllIncidentsRepo() {
    return await incidents.find().toArray()
}

export async function insertIncidentRepo(data) {
    return await incidents.insertOne(data)
}

export async function findOneIncidentRepo(id) {
    return await incidents.findOne({_id: new ObjectId(id)})
}

export async function updateIncidentRepo(id, data){
    return await incidents.updateOne({_id:new ObjectId(id)}, {$set:data})
}

export async function deleteIncidentRepo(id) {
    return await incidents.deleteOne({_id: new ObjectId(id)})
}