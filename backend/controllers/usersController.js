import {insertUserService, loginUserService} from "../services/usersService.js"

export async function registerController(req, res) {
    try {
        const result = await insertUserService(req.body)

        return res.status(201).json({
            success: true,
            data: result
        })
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            success: false,
            message: "server error"
        })
    }
}

export async function loginController(req, res) {
    try {
        const result = await loginUserService(req.body)

        return res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            success: false,
            message: "server error"
        })
    }
}

export function getMeController(req, res) {
    return res.status(200).json({
        success: true,
        user: req.user
    })
}