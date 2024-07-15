import authentication from "@/server/Helpers/Authorization";
import { explainService } from "@/server/services/ai.service";

export async function POST(request: Request) {
    const data = await request.json();
    const user = await authentication(request);
    const response = await explainService({ user, ...data });
    return Response.json(response);
}