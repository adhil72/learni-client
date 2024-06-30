import { instance } from "../instance";

export const createChatController = () => instance.post('/chat/create',).then((data) => data.data)
export const getChatsController = () => instance.get('/chat/get').then((data) => data.data)
export const fetchChatGenerationsController = (chat_id: string) => instance.get('/chat/get/generations?id=' + chat_id).then(({ data }) => data)