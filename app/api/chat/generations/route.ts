import authentication from "@/server/Helpers/Authorization";
import { getChatGenerationsService } from "@/server/services/chat.service";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const id = url.search.replaceAll('?id=', '');
    if (!id) throw new Error('Invalid chat id');
    const response = await getChatGenerationsService({ chatId: id || "" });
    return Response.json(response);
}