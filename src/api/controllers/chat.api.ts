import { instance } from "../instance";

export const createChatController = () => instance.post('/chat',).then((data) => data.data)
export const getChatsController = () => instance.get('/chat').then((data) => data.data)
export const fetchChatGenerationsController = (chat_id: string) => {
    if (!chat_id) {
        return Promise.resolve({ data: [] })
    }
    return instance.get('/chat/generations?id=' + chat_id).then(({ data }) => data)
}