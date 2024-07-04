import { Chat } from "@/types/chat.types";
import { createContext } from "react";

interface AppContextType {
    chatId: string;
    setChatId: (chatId: string) => void;
    chats: Chat[];
    createChat: () => void
}

export const AppContext = createContext<AppContextType>({
    chatId: "",
    setChatId: () => { },
    chats: [],
    createChat: () => { }
});