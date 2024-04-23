import React from 'react'

import {services} from './index.js'
import { Link } from 'react-router-dom'
const Services = () => {

  

  return (
    <section className='bg-[#032830] flex justify-center flex-col items-center py-10'>
      <h1 className='text-center text-white text-4xl italic font-semibold'>Our Services</h1>
      <p className='text-center text-[#5aa6b6] text-xl py-4 italic'>We offer variety of services to meet your needs. <br /> Our team is dedicated to providing the best solutions for you.</p>
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3 mx-10  '>
        {
          services.map((service)=>{
            return (
              <Link key={service.id}
                to={service.url}
              >
                <div 
                className=' border hover:scale-105 transition-transform rounded-3xl overflow-hidden'
              >
                <div className=' border'>
                <img src={service.img} alt="" width={200} className='w-96'/>
                </div>
                <h1 className='text-center text-white text-xl py-2 '>{service.name}</h1>
              </div>
              </Link>
              
            )
          })
        }
      </div>
    </section>
  )
}

export default Services