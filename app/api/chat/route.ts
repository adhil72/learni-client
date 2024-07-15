import authentication from "@/server/Helpers/Authorization"
import { getChatService, createChatService } from "@/server/services/chat.service"
export async function GET(request: Request) {
    const user = authentication(request)
    let response = await getChatService({ user })
    return Response.json(response)
}

export async function POST(request: Request) {
    const user = await authentication(request)
    console.log(user);
    
    let response = await createChatService({ user })
    return Response.json(response)
}