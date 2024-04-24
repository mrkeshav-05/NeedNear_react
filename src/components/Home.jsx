import React from 'react'
import Carousel from './carousel';
// import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Crousal from './Crousal';
import Card from './cards';

const Home = () => {
  const slider_data = ['Laundry', 'Electrician', 'Plumber', 'Carpenter', 'Painter']
  return (
    <div className=''>

      <Crousal/>
      <div className='m-auto w-[70%]'>
      <div>
        <ul className='flex flex-row justify-between'>
          {
            slider_data.map((item, index) => {
              return (
                <li key={index} className='px-12 py-2 bg-gray-800 rounded-half text-white text-xl my-10'>{item}</li>
              )
            })
          }
        </ul>
      </div>
      </div>
      

      <div className='flex flex-wrap justify-center'>
      <Card/>
      <Card/>
      <Card/>
      <Card/> 
      <Card/>
      </div>

    </div>


  )
}

export default Home
