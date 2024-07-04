import Button from "@/Components/Common/Button";
import Column from "@/Components/Common/Column";
import Line from "@/Components/Common/Line";
import Logo from "@/Components/Common/Logo";
import { AppContext } from "../../../../app/context";
import { use, useContext, useEffect } from "react";
import { ChatContext } from "../../../../app/chat/context";

export default function Sidebar() {

    const { chats, setChatId, chatId, createChat } = useContext(AppContext)
    const { openSideBar, setOpenSideBar } = useContext(ChatContext)

    useEffect(() => {
        console.log(chatId)
    }, [chatId])

    return <Column onClick={() => setOpenSideBar(false)} className={`${openSideBar ? "w-full" : "w-[0px]"} ${openSideBar ? "bg-opacity-25" : "bg-opacity-0"} cursor-pointer trans fixed lg:relative z-10 overflow-hidden lg:w-[20%] `}>
        <Column className={`w-[200px] lg:w-full trans overflow-hidden h-screen items-center justify-center lg:flex`}>
            <Column className=" w-[90%] bg-secondary h-[96vh] shadow-lg rounded-xl">
                <Column className="p-5">
                    <Logo className="text-2xl font-extrabold" />
                    <Line className="my-4" />

                    <Button onClick={createChat} className="text-sm">New chat</Button>
                    <Column className="mt-4">
                        {
                            chats.map((item, index) => <Button onClick={() => { setChatId(item.id) }} key={index} variant={chatId === item.id ? "contained" : "text"} className="!text-sm !justify-start !font-normal !px-3 py-3 normal-case text-black mb-2">
                                <span className="overflow-hidden line-clamp-1">
                                    {item.title ? item.title : "Chat " + (index + 1)}
                                </span>
                            </Button>)
                        }
                    </Column>
                </Column>
            </Column>
        </Column>
    </Column>
}