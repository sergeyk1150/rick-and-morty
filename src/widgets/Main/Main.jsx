import { ErrorBoundary } from "@/shared/components"
import { Suspense } from "react"

export const Main = ({children}) => {

    return (
        <main>
            <ErrorBoundary>
                {/* {children} */}
                {/* <Outlet/> */}
                <Suspense>
                    {children}
                </Suspense>
            </ErrorBoundary>
        </main>
    )
}