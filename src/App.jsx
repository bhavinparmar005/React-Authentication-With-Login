import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistrationPage from './pages/RegistrationPage'
import HomePage from './pages/HomePage'
import AddPost from './pages/AddPost'
import LoginPage from './pages/LoginPage'
import EditPage from './pages/EditPage'
import LogoutPage from './pages/LogoutPage'
import DashBord from './pages/DashBord'

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/AddPost' element={<AddPost />} />
          <Route path='/EditPage' element={<EditPage />} />
          <Route path='/HomePage' element={<HomePage />} />
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='/LogoutPage' element={<LogoutPage />} />
          <Route path='/' element={<RegistrationPage />} />
          <Route path='/DashBord' element={<DashBord/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
