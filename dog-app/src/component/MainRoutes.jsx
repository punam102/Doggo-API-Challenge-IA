import React from 'react'
import{Routes, Route} from "react-router-dom"
import { Details } from './Details'
import { Dog } from './Dog'
import { Login } from './Login'
import { Signup } from './Signup'

export const MainRoutes = () => {
  return (
    <div>
  <Routes>
         <Route path="/" element={<Signup />} />
 
  <Route path="/login" element={<Login />} />
  <Route path='/dog' element={<Dog/>} />
  <Route path='/dog/:id' element={<Details/>} />
  <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
   

    </div>
  )
}
