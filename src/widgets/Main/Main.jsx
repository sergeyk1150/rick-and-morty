import { ErrorBoundary } from "../../shared/components"

export const Main = ({children}) => {

    return (
        <main>
            <ErrorBoundary>
                {children}
                {/* <Outlet/> */}
                {/* <Suspense>
                    <Outlet/>
                </Suspense> */}
            </ErrorBoundary>
        </main>
    )
}