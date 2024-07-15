import { verify } from "./Jwt";
import { error, msg } from "./Logger";

const publicRoutes = ['/api/auth', '/file'];

export default function authentication(request: Request) {
    let path = pathExtractor(request.url);
    msg(request.method + ' : ' + path);
    if (publicRoutes.includes(path)) return true;
    let token = request.headers.get("authorization")?.split(' ')[1]
    if (!token) throw new Error('Unauthorized');
    let user = verify(token);
    if (!user) throw new Error('Unauthorized');
    return user;
}

function pathExtractor(url: string) {
    let path = url.replaceAll("//", "").split("/");
    path.shift();
    return `/${path.join("/")}`
}