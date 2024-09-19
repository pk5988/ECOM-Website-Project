import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Partials/Navbar'
import Footer from './Partials/Footer'
import About from './About'
import Shop from './Shop'
import ContactUs from './ContactUs'
import Error404 from './Error404'



export default function App() {
  return (
    
    <BrowserRouter>
      <Navbar/>

      <Routes>
          <Route path ='' element={<Home/>}/>
          <Route path ='/about' element={<About/>}/>
          <Route path ='/shop' element={<Shop/>}/>
          <Route path ='/contactus' element={<ContactUs/>}/>
          <Route path ='/*' element={<Error404/>}/>
          

      </Routes>

     <Footer/>
      
    </BrowserRouter>
    
  )
}
