import { instance } from "../instance";

export const generateParagraphScript = (paragraph: string, chat_id: string) =>
    instance.post('/ai', { paragraph, chat_id }).then(res => res.data)

export const audioFile = (fileName: string) =>
    `/audio/${fileName}`
