import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Laws from './Laws'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Landingpg from './Landingpg'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landingpg/>}></Route>
        <Route path='/Laws' element={<Laws/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
