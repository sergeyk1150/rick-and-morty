import { authenticate } from "@/shared"
import { useAuth } from "./useAuth"

export const AuthStatus = () => {
    const auth = useAuth()
    
    return auth.user ? authenticate.LOGGED : authenticate.NOT_LOGGED
}