import { Routes, Route } from 'react-router'
import { MainLayout } from './components/mainLayout/MainLayout'
import { CharacterDetails, Characters, EpisodeDetails, Episodes, Greeting, Locations, LocationDetails } from './components/category/components'
import { NotFound, Login } from './components'
import './App.css'
import { AuthProvider } from './context/AuthProvider'
import { PrivateRoute } from './components/provateRoute/PrivateRoute'

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
