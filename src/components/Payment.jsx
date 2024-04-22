import React from 'react'
import { Link } from 'react-router-dom'
import { cardbg } from '../assets/images'
const Payment = () => {
  const options = [
    { id: 1, name: 'Credit Card' },
    { id: 2, name: 'Debit Card' },
    { id: 3, name: 'Net Banking' },
    { id: 4, name: 'UPI' },
    { id: 5, name: 'Wallet' },
  ]
  return (
    <section className='font-serif'>
      <h1>Choose payment options</h1>
      <div className='flex justify-center gap-5 text-xl font-serif font-semibold'>
        {
          options.map((option)=>{
            return (
              <div key={option.id} className='flex hover:text-red-500'>
                <Link to="/de">
                  {option.name}
                </Link>
              </div>
            )
          
          })
        }
      </div>
      <div>
        <img src={cardbg}
        width={1000}
        alt="" />
      </div>
    </section>
  )
}

export default Payment