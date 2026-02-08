import { Routes, Route } from 'react-router'
import { MainLayout } from './components/mainLayout/MainLayout'
import { CharacterDetails, Characters, EpisodeDetails, Episodes, Greeting, Locations, LocationDetails } from './components/category/components'
import './App.css'

function App() {

  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/' element={<Greeting/>}/>
        <Route path='/characters' element={<Characters/>}/>
        <Route path='/characters/:id' element={<CharacterDetails/>}/>
        <Route path='/episodes' element={<Episodes/>}/>
        <Route path='/episodes/:id' element={<EpisodeDetails/>}/>
        <Route path='/locations' element={<Locations/>}/>
        <Route path='/locations/:id' element={<LocationDetails/>}/>
      </Route>
    </Routes>

  )
}

export default App
