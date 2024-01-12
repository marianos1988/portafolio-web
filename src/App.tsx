import { Navigate, Route, Routes } from 'react-router-dom'
import { Index } from './routes/Index'
import { Home } from './routes/Home'
import { Perfil } from './routes/Perfil'
import { Skills } from './routes/Skills'
import { Educacion } from './routes/Educacion'
import { Trabajos } from './routes/Trabajos'
import { Proyectos } from './routes/Proyectos'
import { Github } from './routes/Github'
import { Email } from './routes/Email'

function App() {

  return (
    <>
       <Routes>
          <Route path='/' element= { <Navigate to="/index.html"></Navigate> }></Route>
          <Route path='/index.html' element={ <Index></Index> }></Route>
          <Route path='/Home' element= { <Home></Home> }></Route>
          <Route path="/*" element= { <Navigate to="/" /> }></Route>
          <Route path='/Perfil' element= { <Perfil></Perfil> }></Route>
          <Route path='/Skills' element= { <Skills></Skills> }></Route>
          <Route path='/Educacion' element= { <Educacion></Educacion> }></Route>
          <Route path='/Trabajos' element= { <Trabajos></Trabajos> }></Route>
          <Route path='/Proyectos' element={ <Proyectos></Proyectos >}></Route>
          <Route path='/Github' element={ <Github></Github> }></Route>
          <Route path='/Email' element={ <Email></Email> }></Route>
        </Routes>
    </>
  )
}

export default App
