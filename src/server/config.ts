import { config as c } from "dotenv"; c();
import { connect } from "@/server/db/config";
import { msg, error } from "@/server/Helpers/Logger";
import { NextResponse } from "next/server";

export async function serverConfig() {
    await connect().catch((err) => {
        error(err);
    })
    return NextResponse.next();
}

export const config = {
    matcher: '/api/:path*',
}