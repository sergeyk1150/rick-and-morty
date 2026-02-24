import { Outlet } from "react-router"
import { Header } from "../header/Header"
import { Suspense } from "react"
import { ErrorBoundary } from "../errorBoundary/ErrorBoundary"

export const MainLayout = () => {
    return (
        <>
            <Header/>
            <main>
                <ErrorBoundary>
                    <Suspense>
                        <Outlet/>
                    </Suspense>
                </ErrorBoundary>
            </main>
        </>
    )
}