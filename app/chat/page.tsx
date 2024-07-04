"use client";

import Chat from "@/Components/Feature/Chat/Chat";
import { ChatContext, ChatContextType } from "./context";
import { useContext, useEffect, useMemo, useState } from "react";
import { generateParagraphScript } from "@/api/controllers/ai.api";
import { AppContext } from "../context";
import { createToast } from "@/Components/Common/Toast";
import { Message } from "@/types/chat.types";
import { fetchChatGenerationsController, getChatsController } from "@/api/controllers/chat.api";

export default function Page() {

    const { chatId } = useContext(AppContext)

    const [messages, setMessages] = useState<Message[]>([]);
    const [openSideBar, setOpenSideBar] = useState(false);

    const sendMessage = async (message: string) => {
        console.log(message);
        setMessages([...messages, ...[
            { data: [message], ai: false, generated: false },
            { data: [], ai: true, generated: false }
        ]]);

        try {
            const response = await generateParagraphScript(message, chatId);
            createToast({ message: "response created", type: "success", title: "Response" });
            setMessages((prev) => {
                const last = prev[prev.length - 1];
                last.data = response.data;
                last.generated = true;
                prev[prev.length - 1] = last;
                return [...prev];
            });
        } catch (e: any) {
            createToast({ message: e.message, type: "error", title: "Error" });
        }
    }

    const contextData: ChatContextType = useMemo(() => {
        return { messages, setMessages, sendMessage, openSideBar, setOpenSideBar }
    }, [messages, setMessages, sendMessage, openSideBar, setOpenSideBar]);

    useEffect(() => {
        fetchChatGenerationsController(chatId).then((response) => {
            let data = response.data;
            let newMessages: Message[] = [];
            data.forEach((d: any) => {
                newMessages.push({
                    data: [d.prompt],
                    ai: false,
                    generated: false
                });

                newMessages.push({
                    data: d.script.split("<<<<SPLITTER>>>>"),
                    ai: true,
                    generated: true
                });

            });
            setMessages(newMessages);
        })
    }, [chatId])

    return <ChatContext.Provider value={contextData}>
        <Chat />
    </ChatContext.Provider>
}