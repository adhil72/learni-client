import Row from "@/Components/Common/Row";

export default function AskItem({ data }: { data: string }) {
    return <Row className="w-full justify-end my-2">
        <div className="bg-secondary shadow-xl animate-slide-up-fade text-black p-3 rounded-lg">
            <p className="text-md">{data}</p>
        </div>
    </Row>
}