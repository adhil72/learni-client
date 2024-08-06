import { instance } from "../instance";

export const generateParagraphScript = (paragraph: string) =>
    instance.post('/ai/explain', { paragraph }).then(res => res.data)

export const audioFile = (fileName: string) =>
    `/audio/${fileName}`
