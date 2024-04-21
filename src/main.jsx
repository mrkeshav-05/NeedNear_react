import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import Navbar from './components/Navbar.jsx'
import '@radix-ui/themes/styles.css';
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} errorElement={"You are in the worng generation bro"}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='portfolio' element={<Portfolio/>}/>
      <Route path='login' element={<Login/>} />
      <Route path='signup' element={<Signup/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>, 

)
