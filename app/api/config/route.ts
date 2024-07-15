import { serverConfig } from "@/server/config";

export async function GET(request: Request) {
    await serverConfig()
    return Response.json({ message: "Hello World" })
}