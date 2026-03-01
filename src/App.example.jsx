import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import { MainLayout } from './components/mainLayout/MainLayout'
import { NotFound, Login } from './components'
import './App.css'
import { AuthProvider } from './context/AuthProvider'
import { PrivateRoute } from './components/provateRoute/PrivateRoute'

const Greeting = lazy(() => import('./components/category/components/greeting/Greeting').then((module)=>({default: module.Greeting})))
const Characters = lazy(() => import('./components/category/components/characters/Characters').then((module)=>({default: module.Characters})))
const CharacterDetails = lazy(() => import('./components/category/components/characters/components/characterDetails/CharacterDetails').then((module)=>({default: module.CharacterDetails})))
const Episodes = lazy(() => import('./components/category/components/episodes/Episodes').then((module)=>({default: module.Episodes})))
const Locations = lazy(() => import('./components/category/components/locations/Locations').then((module)=>({default: module.Locations})))
const EpisodeDetails = lazy(() => import('./components/category/components/episodes/components/episodeDetails/EpisodeDetails').then((module)=>({default: module.EpisodeDetails})))
const LocationDetails = lazy(() => import('./components/category/components/locations/components/locationDetails/LocationDetails').then((module)=>({default: module.LocationDetails})))

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route element={<PrivateRoute/>}>
            <Route path='/characters' element={<Characters/>}/>
            <Route path='/characters/:id' element={<CharacterDetails/>}/>
            <Route path='/episodes' element={<Episodes/>}/>
            <Route path='/episodes/:id' element={<EpisodeDetails/>}/>
            <Route path='/locations' element={<Locations/>}/>
            <Route path='/locations/:id' element={<LocationDetails/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/' element={<Greeting/>}/>
        </Route>
      </Routes>
    </AuthProvider>
    

  )
}

export default App
