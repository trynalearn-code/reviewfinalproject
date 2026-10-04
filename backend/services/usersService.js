import { findUserByEmailRepo, insertUserRepo } from "../repos/usersRepo.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export async function insertUserService(data) {
    const hashedPassword = await bcrypt.hash(data.password, 12)
    data.password = hashedPassword
    const result = await insertUserRepo(data)
    return result
}

export async function loginUserService(data) {
    if (!data.email || !data.password) return "You must enter both your email and password"
    const emails = await findUserByEmailRepo(data.email)
    const check = await bcrypt.compare(data.password, emails.password)
    if (check) {
        const token = jwt.sign(
            { userId: emails._id },
            process.env.JWT_SECRET
        )
        return token
    }
    return false
}