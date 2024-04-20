import React from 'react'

const Footer = () => {
  return (
<>
<div className='text-white  bg-black divide-y'>


<div className='h-96 flex justify-between py-16'>

<div className='w-1/4  h-full flex flex-col justify-center items-center'>
  <h1 className='text-3xl'>LOGO</h1>
  <br />
  <p className=''>Company Name</p>
</div>


<div className='w-1/4  h-full flex flex-col items-center'>
<h1 className='text-3xl font-bold'>Company</h1>
<br />
<div className='h-full flex flex-col space-around justify-around'>
<p>About Us</p>
<p>Contact Us</p>
<p>Terms and Conditio</p>
<p>Privacy and Policy</p>
</div>

</div>


<div className='w-1/4  h-full flex flex-col items-center'>
  <h1 className='text-3xl font-bold'>For Customer</h1>
  <br />
  <div className='flex flex-col justify-around h-full'>
    <p>Customer review</p>
    <p>Blogs</p>
    <p>Extra</p>
    <p>Extra</p>
  </div>
</div>


<div className='w-1/4  h-full flex items-center  flex-col'>
  <h1 className='text-3xl font-bold'>Get in Touch</h1>
  <br />
    <div className='flex flex-col h-full justify-around gap-3'>
      <p>Address: IIITL, Lucknow</p>
      <p>Phone: +91 7568123924</p>
      <p>Email:abha.sagar.official@gmail.com</p>
  </div>
</div>

</div>

<div className='py-20 px-20 text-xl'>
  &copy;Copyright 2024 Company Name.All rights reserved.
</div>


</div>
</>
  )
}

export default Footer