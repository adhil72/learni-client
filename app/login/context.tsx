import { createContext } from "react";

interface LoginContextType {
    login: (message: string) => void;
}

export const LoginContext = createContext<LoginContextType>({
    login: () => { }
});