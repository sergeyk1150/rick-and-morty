import { Routes, Route } from "react-router-dom"
import { PrivateRoute } from "./provateRoute"
import { lazy, Suspense } from "react"

const HomePage = lazy(() => import('@/pages/HomePage/HomePage').then((module)=>({default: module.HomePage})))
const CharactersPage = lazy(() => import('@/pages/CharactersPage/CharactersPage').then((module)=>({default: module.CharactersPage})))
const CharacterPage = lazy(() => import('@/pages/CharacterPage/CharacterPage').then((module)=>({default: module.CharacterPage})))
const EpisodesPage = lazy(() => import('@/pages/EpisodesPage/EpisodesPage').then((module)=>({default: module.EpisodesPage})))
const EpisodePage = lazy(() => import('@/pages/EpisodePage/EpisodePage').then((module)=>({default: module.EpisodePage})))
const LocationsPage = lazy(() => import('@/pages/LocationsPage/LocationsPage').then((module)=>({default: module.LocationsPage})))
const LocationPage = lazy(() => import('@/pages/LocationPage/LocationPage').then((module)=>({default: module.LocationPage})))
const MainLayout = lazy(() => import('@/pages/MainLayout/MainLayout').then((module)=>({default: module.MainLayout})))
const LoginPage = lazy(() => import('@/pages/LoginPage/LoginPage').then((module)=>({default: module.LoginPage})))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage/NotFoundPage').then((module)=>({default: module.NotFoundPage})))

export const Router = () => {
    return (
        <Suspense >
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route element={<PrivateRoute/>}>
                        <Route path="/characters">
                            <Route index element={<CharactersPage/>}/>
                            <Route path=":id" element={<CharacterPage/>}/>
                        </Route>

                        <Route path="/episodes">
                            <Route index element={<EpisodesPage/>}/>
                            <Route path=":id" element={<EpisodePage/>}/>
                        </Route>

                        <Route path="/locations">
                            <Route index element={<LocationsPage/>}/>
                            <Route path=":id" element={<LocationPage/>}/>
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </Suspense>
        
    )
}