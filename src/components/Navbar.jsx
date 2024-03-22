import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/react.svg';
import Login from './Login';
import { useAuth0 } from "@auth0/auth0-react";
import {Links} from './index';
const Navbar = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();


  // const { data: session }: any = useSession();
  // const [visible, setVisible] = useState(false)
  return (
    <nav className="flex  flex-row items-center h-16 px-4 border-b border-gray-200/50 backdrop-filter backdrop-blur-sm/t-5 justify-between gap-4 md:gap-6 lg:gap-8 w-full  ">
      <Link 
        className="flex items-center gap-2 text-lg font-semibold" 
        to="/"
      >
          <img
            src={Logo}
            alt="logo"
            className='h-20 w-20'
          />
      </Link>
      <nav className="flex items-center gap-8 text-md   font-light">
        {/* <NavLink 
          className={({isActive})=>{
            `flex items-center gap-2 rounded-md hover:bg-gray-100/50 transition-colors  px-2 ${isActive ? 'text-white': 'text-black'}`
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink 
          className={({isActive})=>{
            `flex items-center gap-2 rounded-md hover:bg-gray-100/50 transition-colors  px-2 ${isActive ? 'text-white': 'text-black'}`
          }}
          to="/"
        >
          Services
        </NavLink>
        <NavLink 
          className={({isActive})=>{
            `flex items-center gap-2 rounded-md hover:bg-gray-100/50 transition-colors  px-2 ${isActive ? 'text-white': 'text-black'}`
          }}
          to="/"
        >
          Portfolio
        </NavLink>
        <NavLink 
          className={({isActive})=>{
            `flex items-center gap-2 rounded-md hover:bg-gray-100/50 transition-colors  px-2 ${isActive ? 'text-white': 'text-black'}`
          }}
          to="/About"
        >
          About
        </NavLink>
        <NavLink 
          className={({isActive})=>{
            `flex items-center gap-2 rounded-md hover:bg-gray-100/50 transition-colors  px-2 ${isActive ? 'text-white': 'text-black'}`
          }}
          to="/contact"
        >
          Contact
        </NavLink> */}
        {
          Links.map((link)=>{
            return(
              <NavLink 
                className={({isActive})=>{
                  `flex items-center gap-2 rounded-md hover:bg-gray-100/50 transition-colors  px-2 ${isActive ? 'text-white': 'text-black'}`
                }}
                to={link.link}
              >
                {link.name}
              </NavLink>
            
            )
          })
        }
      </nav>
      <div>
          
          <Link 
          className='border-2 font-thin py-2 px-3 rounded-md bg-green-400 border-green-700'
          onClick={()=> loginWithRedirect()}
          to="/login"
          >
          Login/Sign Up
        </Link>

          <Link>
          Profile
        </Link>
        
        
      </div>

    </nav>
  );
}

export default Navbar;







 // <div className=' shadow-black shadow-2xl  border'>

    //   <div className=' h-20 border mx-10    '>
    //     <ul className='flex justify-between h-10 '>
    //       <div>
    //         <li className='h-20 w-20 border'>
    //           <Link to="/">
    //             <img
    //               src={Logo}
    //               alt="logo"

    //               className='h-20 w-20'
    //             />
    //           </Link>
    //         </li>
    //       </div>
    //       <div className='flex  gap-20 align-middle border h-auto justify-center mt-8  '>
    //         <li className='flex align-middle h-auto '>
    //           <Link to='/'>
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to='/Services'>
    //             Services
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to='/aboutus'>
    //             About Us
    //           </Link>
    //         </li>
    //       </div>
    //       <div>
    //         <li>
    //           <button className='flex  gap-20 align-middle justify-center mt-6 border rounded py-2 px-3 '>
    //             Login/Sign Up
    //           </button>
    //         </li>
    //       </div>


    //     </ul>
    //   </div>

    // </div>