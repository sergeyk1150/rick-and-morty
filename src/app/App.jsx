import { AuthProvider } from "../entities/user/model/AuthProvider"

import { Router } from "./router"

export const App = () => {
    return (
        <AuthProvider>
            <Router/>           
        </AuthProvider>

    )
}