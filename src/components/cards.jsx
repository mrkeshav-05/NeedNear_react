import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar,FaStarHalf } from "react-icons/fa";

const Card = () => {
  return (
    <div className='m-10'>
      

<div class="w-full  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src="https://imgs.search.brave.com/DCOvNH5c3DGyYD-WKs0U9MtFgTHpT5xLFJr4OeIVpk4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/ODgyNjU3NC9waG90/by9sYXVuZHJ5LXJv/b20taW50ZXJpb3Iu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW5BTlZzMVBOSTI3/MWc5SEdoUlJJVDVs/OTRzejI5aDJ4LXlX/U0lRUWxOc0E9" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Laundry Near | Which meets your Needs </h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
            <FaStar size={24} color='orange'/>
            <FaStar size={24} color='orange'/>
            <FaStar size={24} color='orange'/>
            <FaStar size={24} color='orange'/>
            <FaStarHalf size={24} color='orange'/>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">4.8</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$1</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book Now</a>
        </div>
    </div>
</div>

    </div>
  )
}

export default Card
