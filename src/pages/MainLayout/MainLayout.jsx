import { Header} from "@/widgets/Header"
import {  Main } from "@/widgets/Main"
import { Outlet } from "react-router"


export const MainLayout = () => {
    return (
        <>
            <Header/>
            <Main>
                <Outlet/>
            </Main>
        </>
    )
}