import Button from "@/Components/Common/Button";
import React, { useContext } from "react";
import { ChatContext } from "../../../../app/chat/context";

export default function AskInput({ className }: React.HTMLProps<HTMLDivElement>) {

    const { sendMessage } = useContext(ChatContext);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = (e.target as any).ask_ipt;
        sendMessage(data.value);
        data.value="";
    }

    return <div className="w-full flex justify-center py-3 shadow-md">
        <form onSubmit={onSubmit} className="flex w-3/4 md:w-1/2  bg-secondary text-black rounded-[30px] overflow-hidden ps-4 shadow-lg">
            <input name="ask_ipt" type="text" placeholder="send a message" className="w-full outline-none border-none py-3" />
            <Button type="submit" className="bg-tint-alt text-white rounded-[30px] px-5 ml-2 shadow-lg">Send</Button>
        </form>
    </div>
}