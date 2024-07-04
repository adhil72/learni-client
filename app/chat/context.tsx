import { Message } from "@/types/chat.types";
import React, { createContext } from "react";

export interface ChatContextType {
    messages: Message[];
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
    sendMessage: (message: string) => void;
    openSideBar: boolean;
    setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ChatContext = createContext<ChatContextType>({
    messages: [],
    sendMessage: () => { },
    setMessages: () => { },
    openSideBar: false,
    setOpenSideBar: () => { }
});