import { config as c } from "dotenv"; c()
import { authService } from "@/server/services/auth.service";

export async function POST(request: Request) {
    let data = await request.json()
    let response = await authService(data).catch(err => { err: JSON.stringify(err) })
    return Response.json(response)
}