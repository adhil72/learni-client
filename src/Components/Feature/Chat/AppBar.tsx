import Button from "@/Components/Common/Button";
import Column from "@/Components/Common/Column";
import Logo from "@/Components/Common/Logo";
import Row from "@/Components/Common/Row";
import { MdMenu } from "react-icons/md";
import { ChatContext } from "../../../../app/chat/context";
import { useContext } from "react";
import { BiUserCircle } from "react-icons/bi";



export default function AppBar() {
    const { setOpenSideBar } = useContext(ChatContext)
    return <Row className={"bg-inherit w-full backdrop-blur-[10px] bg-opacity-65 justify-between"}>
        <Row className="p-5 items-center">
            <Button onClick={() => setOpenSideBar(true)} className="text-2xl font-bold text-white bg-tint mr-3 lg:hidden" >
                <MdMenu />
            </Button>
            <span className="text-3xl font-bold text-primary" >Chat</span>
        </Row>
        <Column className="p-5">
            <div className="flex items-center justify-end bg-tint rounded-full text-4xl">
                <BiUserCircle className="text-white" />
            </div>
        </Column>
    </Row>
}