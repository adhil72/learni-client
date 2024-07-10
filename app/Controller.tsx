"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AppContext } from "./context";
import CircularProgress from "@/Components/Common/CircularProgress";
import { createChatController, getChatsController } from "@/api/controllers/chat.api";
import { createToast } from "@/Components/Common/Toast";
import Script from "next/script";
import { Chat } from "@/types/chat.types";
import { useRouter } from "next/navigation";

export default function Controller(props: React.HTMLProps<HTMLDivElement>) {

    const [chatId, setChatId] = useState("");
    const [chats, setChats] = useState<Chat[]>([]);
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    const getChatId = async () => {
        return await getChatsController().then(({ data }) => {
            setChats(data);
            if (data.length === 0) {
                createChat()
            } else {
                setChatId(data[0].id);
            }
        })

    }

    const createChat = () => {
        createChatController().then(({ data }) => {
            setChatId(data.id);
            createToast({ message: "Chat created successfully", title: "Success", type: "success" });
        }).catch(e => {
            createToast({ message: e.message, title: "Error", type: "error" });
        })
    }

    const contextData = useMemo(() => ({
        chatId,
        setChatId,
        chats,
        createChat
    }), [chatId, setChatId, chats, createChat])

    useEffect(() => {
        if (localStorage.getItem("token")) {
            if (chatId === "") {
                getChatId()
            } else {
                setLoading(false);
            }
        } else {
            if (window.location.pathname === "/login" || window.location.pathname === "/") {
                return 
             } else {
                return router.push("/login");
            }
        }
    }, [loading])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            (window as any).MathJax = {
                tex: {
                    inlineMath: [['$', '$'], ['\\(', '\\)']],
                    displayMath: [['$$', '$$'], ['\\[', '\\]']],
                    processEscapes: true,
                    processEnvironments: true,
                },
                options: {
                    renderActions: {
                        addMenu: [0, '', ''],
                    },
                },
            };
        }
    }, []);

    return <AppContext.Provider value={contextData}>
        <Script
            id="mathjax-config"
            strategy="beforeInteractive"
            src="/mathjax-config.js"
        />
        <Script
            id="mathjax"
            strategy="afterInteractive"
            src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
        />
        {
            loading ? <div {...props} /> : <div className="flex items-center justify-center w-full h-screen">
                <div className="flex flex-col justify-center items-center">
                    <CircularProgress size={40} varient="infinite" />
                    <p className="text-tint text-center mt-4">Just a sec</p>
                </div>
            </div>
        }
    </AppContext.Provider>
}