import React from 'react'

const Horizontal_slider = () => {
const slider_data = ['Laundry', 'Electrician', 'Plumber', 'Carpenter', 'Painter']
  return (
    <div className='m-auto w-[70%]'>
      <div>
        <ul className='flex flex-row justify-between'>
          {
            slider_data.map((item, index) => {
              return (
                <li key={index} className='px-12 py-2 bg-gray-800 rounded-half text-white text-2xl my-10 hover:font-bold'>{item}</li>
              )
            })
          }
        </ul>
      </div>
      </div>
  )
}

export default Horizontal_slider
