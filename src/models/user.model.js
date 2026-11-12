import { db } from "../prisma/db.ts"

export async function getUserModel(email) {
    const user = await db.orm.public.User.where({
        email,
    }).first();
    return user;
}
export async function registerUserModel(email, name, username, password) {
    const create = await db.orm.public.User.create({
        email, name, username, password
    });
    const users = await db.orm.public.User.all()
    // await db.close()
    return users;
}

export async function getAllUsersModel() {

    const users = await db.orm.public.User.all();

    return users;

}