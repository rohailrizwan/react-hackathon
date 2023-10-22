import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import Acceptor from '../Pages/Acceptor'
import Donor from '../Pages/Donor'
import ProtectedDonor from '../Pages/Protected'



export default function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='Signup' element={<Signup/>}></Route>
                <Route path='Home/:id/*' element={<Home/>}></Route>
                <Route path='Acceptor/:id' element={<ProtectedDonor Screen={Acceptor}/>}></Route>
                <Route path='Donor/:id' element={<ProtectedDonor Screen={Donor}/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
