import Button from "@/Components/Common/Button";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter()
    return <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
            <img src="/images/ai.png" alt="Robot" className="w-[200px] lg:w-1/2" />
            <div className="mt-6 lg:mt-0 lg:ml-8 text-center flex flex-col items-center lg:text-left">
                <h2 className="text-gray-500 text-xl">Learni.</h2>
                <h1 className="text-5xl font-bold mt-2">Learn from AI</h1>
                <p className="text-gray-700 text-lg mt-4">
                    Learn from AI is a platform where you can learn from AI. You can ask any question and get the answer from AI in video format.
                </p>
                <Button
                    onClick={() =>
                        localStorage.getItem("token")
                            ? router.push("/chat")
                            : router.push("/login")
                    }
                    className="mt-4 px-5 py-3"
                >
                    Get Started
                </Button>
            </div>
        </div>
    </div>
}