export interface Message {
    data: string[],
    generated: boolean,
    ai: boolean
}

export interface Chat {
    id: string,
    title?: string,
}