import { getUserService, loginService, registerUserService, getAllUsersService } from "../services/user.service.js";

export async function getUserController(req, res) {
    res.status(200).send(await getUserService())
}
export async function registerUserController(req, res) {
    res.status(200).send(await registerUserService(req.body))
}
export async function LoginController(req, res) {

    const user = await loginService(req)
    res.status(user.status).send(user.message)
}

export async function getAllUsersController(req, res) {
    res.status(200).send(await getAllUsersService())
}