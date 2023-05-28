import { useContext } from "react";
import { AuthContext } from "../context/auth/auth";

export const UseAuth = () => {
    const {token , setToken} = useContext(AuthContext)

    return [token, setToken]
}