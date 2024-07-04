import Column from "@/Components/Common/Column";
import Row from "@/Components/Common/Row";
import { Message } from "@/types/chat.types";
import Player from "../Player/Player";

export default function ReplayItem({ data }: { data: Message }) {
    return <Row className="w-full justify-start my-2">
        <Column className="w-full">
            <div className={`w-full lg:w-[500px] h-[250px] md:h-[400px] lg:h-[300px] ${data.generated ? "" : "bg-slate-300 animate-pulse"} rounded-lg flex items-center justify-center animate-slide-right-fade`}>
                {
                    data.generated ? <Player data={data.data} /> : <p className="text-md text-tint font-semibold">Generating...</p>
                }
            </div>
        </Column>
    </Row>
}