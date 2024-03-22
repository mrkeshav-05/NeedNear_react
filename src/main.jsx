import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import Navbar from './components/Navbar.jsx'
import '@radix-ui/themes/styles.css';

import Login from './components/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <h1 className='text-center text-4xl'>Not found Bro</h1>,
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,

  // <BrowserRouter>
  //   <App/>
  //   {/* <RouterProvider router={router}/> */}
  //   {/* <Route path="/" element={Navbar}/> */}
  //   {/* <Route path="/login" element={Login}/> */}
  // </BrowserRouter>,
)
