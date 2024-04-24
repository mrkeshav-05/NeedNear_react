import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NNlogo } from '../assets/images';
import Login from './Login';
import { useAuth0 } from "@auth0/auth0-react";
import { Links } from './index';
const Navbar = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <nav className="flex fixed bg-[#032830] font-serif  text-white fill-neutral-700 shadow-white  z-20    flex-row items-center  py-4 px-12 border-b border-gray-200/50 backdrop-filter backdrop-blur-sm/t-5 justify-between gap-4 md:gap-6 lg:gap-8 w-full  ">
      <Link
        className="flex items-center gap-2 text-lg font-semibold"
        to="/"
      >
        <img
          src={NNlogo}
          alt="logo"
          className='h-20 w-20 rounded-md'
        />
        <h1 className='text-3xl font-sans'>Need <br />Near</h1>
      </Link>
      <nav className="flex items-center gap-8 text-md invisible lg:visible absolute  lg:relative font-light">
        {
          Links.map((link) => {
            return (
              <div
                key={link.id}
              >
                <NavLink
                  className={({ isActive }) => {
                    `flex items-center gap-2 rounded-md hover:bg-gray-100/50 hover: transition-colors  px-2 ${isActive ? 'text-white' : 'text-black'}`
                  }}
                  to={link.link}
                >
                  {link.name}
                </NavLink>
              </div>


            )
          })
        }
      </nav>
      <div>

        <Link
          className='border-2 font-thin py-2 px-10 rounded-md bg-[#5aa6b6] border-green-700'
          onClick={() => loginWithRedirect()}
          to="/login"
        >
          Login
        </Link>

        


      </div>

    </nav>
  );
}

export default Navbar;
