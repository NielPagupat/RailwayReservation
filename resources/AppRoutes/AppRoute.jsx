import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import LoginPage from '../Pages/LoginPage'
import Registration from '../Pages/Registration'

export default function AppRoute() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/> 
            <Route path='/login' element={<LoginPage />}/> 
            <Route path='/register' element={<Registration />} />
        </Routes>
    </BrowserRouter>
  )
}
