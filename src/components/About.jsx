import React from 'react'
import {Team} from './index.js'

export default function About() {
  return (
    <div className="bg-[#032830] py-12 lg:py-16">
      <div className="container px-4">
        <div className="grid gap-12 lg:gap-16">
          <div className="space-y-4">

            <h1 className="text-4xl font-semibold tracking-tight text-center text-white">Welcome to Our World</h1>


            <p className="text-lg font-italic tracking-tight text-center text-[#A8DDDA]">
              Discover the magic behind our creations and the passion that drives us forward.
            </p>
          </div>
          <div className="space-y-8">

            <h2 className="text-4xl font-semibold tracking-tight text-white mx-5">Our Achievements</h2>

            <ul className="grid gap-4 list-disc pl-6">
            <h2 className="text-4xl font-semibold tracking-tight  text-white">Our Achievements</h2>
              <li className="flex items-start space-x-2">

                <span className="text-lg text-[#A8DDDA]">Unmatched customer satisfaction</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lg text-[#A8DDDA]">Revolutionary product innovations</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lg text-[#A8DDDA]">Acclaimed industry recognition</span>

              </li>
            </ul>
          </div>
          <div className="space-y-30">

            <h2 className=" text-3xl font-semibold tracking-tight text-white text-center">Meet Our Visionaries</h2>
            <div className="mx-auto my-20 grid grid-cols-4 lg:grid-cols-4 gap-8 max-w-screen-lg">
                {
                  Team.map((user)=>{
                    return(
                      <div key={user.id} className=' flex-col  w-full rounded-full flex'>
                        <img
                          src={user.src}
                          width={120}
                          height={120}
                          className='rounded-full'
                        />
                        <p className=''>{user.name}</p>
                        {/* <div className='m-4'>
                        <h1 className='text-2xl '>{user.name}</h1>
                        <p className='text-sm font-thin mt-1 '>{user.work}</p>

                        </div> */}
                      </div>
                    )
                  })



                  
                }

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

