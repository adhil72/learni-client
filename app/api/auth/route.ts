import { config as c } from "dotenv"; c()
import { authService } from "@/server/services/auth.service";

export const dynamic = 'force-dynamic'
export async function POST(request: Request) {
    let data = await request.json()
    let response = await authService(data)
    return Response.json(response)
}


// import { Router } from "express";
// import RequestHandler from "../../Helpers/RequestHandler";

// const router = Router();

// router.post('/', (req, res) => RequestHandler(req, res, authService))

// export default router;
