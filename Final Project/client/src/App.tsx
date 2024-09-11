import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Home from './pages/Home'
import AddProject from './pages/AddProject'
import ViewProjects from './pages/ViewProjects'

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/AddProject" element={<AddProject />}></Route>
        <Route path="/ViewProjects" element={<ViewProjects />}></Route>
      </Routes>
    </>
  )
}

export default App
