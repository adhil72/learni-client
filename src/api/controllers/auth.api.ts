import { instance } from "../instance";

export const loginController = (data: { email: string, password: string }) => instance.post('/auth', data).then((data) => data.data)
