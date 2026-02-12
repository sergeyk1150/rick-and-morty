import { AuthStatus } from "../../../authStatus/AuthStatus"

export const Greeting = () => {
    return (
        <>
            <section className="text-center">
                <AuthStatus/>
            </section>
        </>   
    )
}