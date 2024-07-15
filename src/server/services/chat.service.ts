import { randomUUID } from "crypto"
import { getGenerationModel } from "../db/Table/ai.table"
import { getChatModel } from "../db/Table/chats.table"

export const createChatService = async ({ user }: { user: { email: string, id: string } }) => {
    let chat = await getChatModel().create({ user_id: user.id, id: randomUUID() })
    return { message: "Success", success: true, data: chat }
}

export const getChatService = async ({ user }: { user: { email: string, id: string } }) => {
    let chat = await getChatModel().find({ user_id: user.id })
    return { message: "Success", success: true, data: chat }
}

export const getChatGenerationsService = async (data: { chatId: string }) => {
    let generations = await getGenerationModel().find({ chat_id: data.chatId })
    return { message: "Success", success: true, data: generations }
}