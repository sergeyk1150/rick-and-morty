import { ErrorBoundary } from "@/shared/components"

export const Main = ({children}) => {

    return (
        <main>
            <ErrorBoundary>
                    {children}
            </ErrorBoundary>
        </main>
    )
}