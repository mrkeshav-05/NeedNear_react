import React from 'react'

// import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Carousel } from './Crousal';
import Card from './cards';
import Horizontal_slider from './horizontal_slider';

const Home = () => {
  
  return (
    <div className=''>

      <Carousel/>
      <Horizontal_slider/>
      

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
