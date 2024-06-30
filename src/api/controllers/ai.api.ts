import { instance } from "../instance";

export const generateParagraphScript = (paragraph: string, chat_id: string) =>
    instance.post('/ai/explain', { paragraph, chat_id }).then(res => res.data)

export const audioFile = (fileName: string) =>
    `${instance.defaults.baseURL}/file?fileName=${fileName}`
