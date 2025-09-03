import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardLayout from './layouts/DashboardLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Doctor from './pages/Doctor'
import Register from './pages/Register'

function App() {
  

  return (
    <>
     <Routes>
      <Route element={<DashboardLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/doctor' element={<Doctor/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
