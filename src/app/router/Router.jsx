import { Routes, Route } from "react-router"
import { PrivateRoute } from "./provateRoute"
import { MainLayout, CharactersPage, HomePage, LoginPage, NotFoundPage, EpisodesPage, LocationsPage, EpisodePage, LocationPage, CharacterPage } from "../../pages"

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
                <Route path="/*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    )
}