import { Navigate, Route, Routes } from 'react-router-dom'
import { Index } from './routes/Index'
import { Home } from './routes/Home'
import { Perfil } from './routes/Perfil'

function App() {

  return (
    <>
       <Routes>
          <Route path='/' element= { <Navigate to="/index.html"></Navigate> }></Route>
          <Route path='/index.html' element={ <Index></Index> }></Route>
          <Route path='/Home' element= { <Home></Home> }></Route>
          <Route path="/*" element= { <Navigate to="/" /> }></Route>
          <Route path='/Perfil' element= { <Perfil></Perfil>}></Route>
        </Routes>
    </>
  )
}

export default App
