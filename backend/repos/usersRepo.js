import db from "../db.js";

const users = db.collection("users")

export async function insertUserRepo(data) {
    const result = await users.insertOne(data)
    return result
}

export async function findUserByEmailRepo(email) {
    const result = await users.findOne({email:email})
    return result
}