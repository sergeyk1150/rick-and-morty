import { AuthStatus } from "@/entities"
import { Greeting, NotLoggedMessage } from "@/shared"

export const HomePage = () => {
    const authenticateStatus = AuthStatus()
    return (
        <>
           {authenticateStatus ? <Greeting/> : <NotLoggedMessage/>}
        </>
    )
}