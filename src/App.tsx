import { Navigate, Route, Routes } from 'react-router-dom'
import { Index } from './routes/Index'
import { Home } from './routes/Home'

function App() {

  return (
    <>
       <Routes>
          <Route path='/' element= { <Navigate to="/index.html"></Navigate> }></Route>
          <Route path='/index.html' element={<Index></Index>}></Route>
          <Route path='/home.html' element= { <Home></Home> }></Route>
          <Route path="/*" element= { <Navigate to="/" /> }></Route>
        </Routes>
    </>
  )
}

export default App
