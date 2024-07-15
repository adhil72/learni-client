import { compareSync, hashSync } from "bcrypt"
import { sign } from "../Helpers/Jwt";
import { randomUUID } from "crypto";
import { getUserModel } from "../db/Table/users.table";



export const authService = async (data: { email: string, password: string, id: string }) => {
    let user = await getUserModel().findOne({ email: data.email })
    if (user) {
        if (compareSync(data.password, user.password)) {
            let token = sign({ id: user.id, email: user.email })
            return { message: 'Login successful', success: true, data: { token } }
        }
        throw new Error('Invalid password')
    }
    data.password = hashSync(data.password, 10);
    data.id = randomUUID();
    await getUserModel().create(data)
    let token = sign({ id: data.id, email: data.email })
    return { message: 'User added successfully', success: true, data: { token } }
}

export const updatePassword = async (data: { email: string, password: string, headers: any }) => {
    await getUserModel().findOneAndUpdate({ email: data.email }, { password: hashSync(data.password, 10) })
    return { message: 'Password updated successfully', success: true, data: {} }
}
