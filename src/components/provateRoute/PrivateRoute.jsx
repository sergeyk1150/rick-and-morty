import { Navigate, Outlet, useLocation } from "react-router"
import { useAuth } from "../../context/useAuth"
import { Suspense } from "react"

export const PrivateRoute = () => {
    const auth = useAuth()
    const location = useLocation()

    if (auth.user === null) {
        return <Navigate to={'/login'} state={{from: location.pathname}} replace/>
    }
    return <Outlet/>
}