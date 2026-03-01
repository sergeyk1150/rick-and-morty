import { Routes, Route } from "react-router"
import { PrivateRoute } from "./provateRoute"
import { lazy } from "react"
// import { MainLayout, CharactersPage, HomePage, LoginPage, NotFoundPage, EpisodesPage, LocationsPage, EpisodePage, LocationPage, CharacterPage } from "@/pages"

const HomePage = lazy(() => import('@/pages').then((module)=>({default: module.HomePage})))
const CharactersPage = lazy(() => import('@/pages').then((module)=>({default: module.CharactersPage})))
const CharacterPage = lazy(() => import('@/pages').then((module)=>({default: module.CharacterPage})))
const EpisodesPage = lazy(() => import('@/pages').then((module)=>({default: module.EpisodesPage})))
const LocationsPage = lazy(() => import('@/pages').then((module)=>({default: module.LocationsPage})))
const EpisodePage = lazy(() => import('@/pages').then((module)=>({default: module.EpisodePage})))
const LocationPage = lazy(() => import('@/pages').then((module)=>({default: module.LocationPage})))
const MainLayout = lazy(() => import('@/pages').then((module)=>({default: module.MainLayout})))
const LoginPage = lazy(() => import('@/pages').then((module)=>({default: module.LoginPage})))
const NotFoundPage = lazy(() => import('@/pages').then((module)=>({default: module.NotFoundPage})))

export const Router = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route element={<PrivateRoute/>}>
                    <Route path="/characters" element={<CharactersPage/>}/>
                    <Route path="/characters/:id" element={<CharacterPage/>}/>
                    <Route path="/episodes" element={<EpisodesPage/>}/>
                    <Route path="/episodes/:id" element={<EpisodePage/>}/>
                    <Route path="/locations" element={<LocationsPage/>}/>
                    <Route path="/locations/:id" element={<LocationPage/>}/>
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    )
}