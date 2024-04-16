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

// const router = createBrowserRouter([ 
//   {
//     path: '/',
//     errorElement: <h1 className='text-center text-4xl'>Not found Bro</h1>,
//     element: <Layout />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/about',
//         element: <About />,
//       },
//       {
//         path: '/contact',
//         element: <Contact />,
//       },
//       {
//         path: '/services',
//         element: <Services />,
//       },
//       {
//         path: '/portfolio',
//         element: <Portfolio />,
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} errorElement={"You are in the worng generation bro"}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='portfolio' element={<Portfolio/>}/>
      <Route path='login' element={<Login/>} />
    </Route>
  )
)

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
