import { stringify } from 'postcss'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {




  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [error, setError] = useState({
    errors: {},
    isError: false,
  })

  useEffect(() => {
    console.log(data)
  }, [data])

  // handle change
  const handleChange = (e, property) => {
    // dynamic setting the values
    setData({ ...data, [property]: e.target.value })
  }

  // submiting the form 
  const submitForm = (e) => {
    e.preventDefault()

    console.log(data)
    // data Validate


    // call server API for sending data
    signUp(data).then((res) => {
      console.log(res)
      console.log("success log")
    }).catch((err) => {
      console.log(err)
    })

    
  }

  return (
    <div className='py-4 bg-[#032830] '>
      <div className='class="rounded-lg bg-[#1E6091] text-white border bg-card text-card-foreground shadow-sm max-w-md mx-auto flex-1" data-v0-t="card"'>
        <div className="flex flex-col space-y-1.5 p-6 text-center pb-0">
          <h3 className="whitespace-nowrap tracking-tight  text-3xl">Sign Up</h3>
          <p className="text-sm text-muted-foreground">Enter your details below to create an account.</p>
          {/* {JSON.stringify(data.name)} */}
          <div className="p-6 text-left flex flex-col ">

            <form onSubmit={submitForm}>
              {/* name */}
              <div className="">

                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Name
                </label>
                <input
                  className="flex h-10 w-full text-black rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="name"
                  placeholder="Keshav Thakur"
                  required=""
                  type="name"
                  onChange={(e) => handleChange(e, 'name')}
                  value={data.name}
                />
              </div>
              {/* email */}
              <div className="">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full text-black rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="mrkeshav.05@gmail.com"
                  required=""
                  type="email"
                  onChange={(e) => handleChange(e, 'email')}
                  value={data.email}
                />
              </div>
              {/* password */}
              <div className="">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Password
                </label>
                <input
                  className="flex h-10 w-full text-black rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="password"
                  required=""
                  type="password"
                  onChange={(e) => handleChange(e, 'password')}
                  value={data.password}
                />
              </div>
            </form>

          </div>
          <div className="flex items-center pb-2  justify-center">
            <Link className="inline-flex items-center w-3/4 text-white  justify-center whitespace-nowrap text-xl font-thin  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-lg bg-green-400 border-2 border-green-700  from-teal-500 to-cyan-600"
            >
              Sign Up
            </Link>

          </div>
          <div className="p-6 text-center text-black text-sm space-y-2">
            <p>
              Already have an account?
              <Link className="underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup