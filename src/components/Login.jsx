import React from 'react'
// import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <div className=' py-10  bg-[#032830] border-b-orange-50'>
      <div className="rounded-lg border border-gray-400  bg-card bg-[#1E6091]  text-black text-card-foreground shadow-sm max-w-md mx-auto flex-1" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-6 text-center pb-0">
          <h3 className="whitespace-nowrap tracking-tight  text-3xl text-white ">Login</h3>
          <p className="text-sm text-muted-foreground text-white">Enter your email below to login to your account.</p>
        </div>
        <div className="p-6 space-y-4">
          <form action="">
            <div className="space-y-2">
              <label
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full text-black rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                placeholder="mrkeshav.05@gmail.com"
                required=""
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="password"
              >
                Password
              </label>
              <input
                className="flex h-10 w-full text-black rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="password"
                required=""
                type="password"
              />
            </div>

          </form>

        </div>

        <div className="flex items-center pb-2  justify-center">
          <Link className="inline-flex items-center w-3/4 text-white  justify-center whitespace-nowrap text-xl font-thin ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-lg bg-green-400 border-2 border-green-700  from-teal-500 to-cyan-600">
            Login
          </Link>

        </div>
        <div className="flex items-center pb-2  justify-center">
          <Link className="inline-flex items-center w-3/4 text-white  justify-center whitespace-nowrap text-xl font-thin ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-lg border-black border">
            Login with Google
          </Link>

        </div>

        <div className="p-6 text-center text-sm space-y-2">
          <p>
            Don't have an account?
            <Link className="underline" to="/signup">
              Sign up
            </Link>
          </p>
          <Link className="underline" href="#">
            Forgot your password?
          </Link>
        </div>
      </div>

    </div>


  )
}

export default Login


