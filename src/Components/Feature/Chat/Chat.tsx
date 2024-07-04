import Row from "@/Components/Common/Row";
import Sidebar from "./Sidebar";
import Column from "@/Components/Common/Column";
import AppBar from "./AppBar";
import Container from "@/Components/Common/Container";
import AskItem from "./AskItem";
import ReplayItem from "./ReplayItem";
import AskInput from "./AskInput";
import { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../../../../app/chat/context";

export default function Chat() {
    const { messages } = useContext(ChatContext)

    const containerRef = useRef<any>(null)

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [messages])

    useEffect(() => {
        if (typeof (window as any)?.MathJax !== "undefined") {
            (window as any).MathJax.typeset()
        }
    }, [])

    return <Row className="w-full h-screen bg-primary">
        <Sidebar />
        <Column className="w-full h-screen">
            <AppBar />
            <Column ref={containerRef} className="w-full h-full overflow-y-auto">
                <Container className="h-full overflow-y-auto">
                    <Column className="w-full h-full">
                        {
                            messages.map((m, i) => {
                                return <div key={i}>{m.ai ? <ReplayItem data={m} /> : <AskItem data={m.data[0]} />}</div>
                            })
                        }
                    </Column>
                </Container>
                <AskInput />
            </Column>
        </Column>
    </Row>
}