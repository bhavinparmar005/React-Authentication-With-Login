import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistrationPage from './pages/RegistrationPage'
import HomePage from './pages/HomePage'
import AddPost from './pages/AddPost'
import LoginPage from './pages/LoginPage'
import EditPage from './pages/EditPage'

import DashBord from './pages/DashBord'

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/AddPost' element={<AddPost />} />
          <Route path='/EditPage' element={<EditPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/LoginPage' element={<LoginPage />} />
       
          <Route path='/DashBord' element={<DashBord />} />
          <Route path='/RegistrationPage' element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
