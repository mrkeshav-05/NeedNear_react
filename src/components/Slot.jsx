import React from 'react'

const Slot = () => {
  return (
    <section className='font-serif bg-[#032830] py-5'>
      <h1 className='text-[#5aa6b6] text-center text-3xl font-bold font-sans'>
        Book Your Slot Now and Save Your Time
      </h1>
      <p className='text-white px-20 font-sans py-3'>Are you ready to embark on a seamless and personalized experience? Your journey begins with a simple yet powerful action-booking your slot! By securing your spot, you're not just reserving a space; you're claiming a tailored experience designed just for you.</p>
      <p className='text-slate-400 italic px-20 font-sans text-sm py-4'>
        Why Book Your Slot?
        <br />
        1. Exclusive Access: <br />
        Be among the first to access premium content, limited-time offers, and special events. Booking your slot ensures you won't miss out on anything extraordinary. <br />
        2. Personalized Engagement: <br />
        Your time is valuable, and so is your experience. Booking a slot allows us to tailor our offerings to suit your preferences, creating a more meaningful and relevant interaction. <br />
        3. Priority Treatment: <br />
        Skip the wait and enjoy priority treatment. By reserving your spot, you become our priority, guaranteeing swift and efficient service. <br />
      </p>
      <div className='flex justify-between mx-16 items-center mt-7'>
        <div className='border w-1/4 rounded-[15%]  bg-[#5aa6b6] p-3'>
          <h1 className='text-center font-serif font-semibold pb-4'>Contact detail</h1>
          <div className='p-6  '>
            <form action="" className=' space-y-10'>
              <div className='flex flex-col'>
                <label
                  for="name"
                  className='text-sm mx-3  font-medium'
                >
                  Full Name :
                </label>
                <input type="text"
                  id='name'
                  placeholder='Enter your name'
                  className='bg-[#3d7783] rounded-full px-3 py-2 text-white '
                />
              </div>
              <div className='flex flex-col'>
                <label
                  for="email"
                  className='text-sm mx-3  font-medium'
                >
                  Email :
                </label>
                <input type="email"
                  id='email'
                  placeholder='Enter your email'
                  className='bg-[#3d7783] rounded-full px-3 py-2 text-white'
                />
              </div>
              <div className='flex flex-col'>
                <label
                  for="phone"
                  className='text-sm mx-3  font-medium'

                >
                  Phone :
                </label>
                <input type="phone"
                  id='phone'
                  placeholder='Enter your phone number'
                  className='bg-[#3d7783] rounded-full px-3 py-2 text-white '

                />
              </div>
            </form>
          </div>
        </div>
        <div className='border w-1/4 rounded-[15%]  bg-[#5aa6b6] p-3'>
          <h1 className='text-center font-serif font-semibold pb-4'>Slot and Services</h1>
          <div className='p-6'>
            <form action="" className='space-y-10'>
              <div className='flex flex-col'>
                <label
                  for="service"
                  className='text-sm mx-3  font-medium'

                >
                  Select a Service :
                </label>
                <input type="option"
                  placeholder='service 1'
                  className='bg-[#3d7783] rounded-full px-3 py-2 text-white '

                />
              </div>
              <div className='flex flex-col'>
                <label
                  for="date"
                  className='text-sm mx-3  font-medium'

                >
                  Select a Date :
                </label>
                <input type="date"
                  placeholder='service 1'
                  className='bg-[#3d7783] rounded-full px-3 py-2 text-white '

                />
              </div>
              <div className='flex flex-col'>
                <label
                  for="time"
                  className='text-sm mx-3  font-medium'

                >
                  Choose a Time :
                </label>
                <input type="time"
                  placeholder='09:00 AM'
                  className='bg-[#3d7783] rounded-full px-3 py-2 text-white '

                />
              </div>
            </form>
          </div>
        </div>
        <div className='border w-1/4 rounded-[15%]  bg-[#5aa6b6] p-3'>
          <h1 className='text-center font-serif font-semibold pb-4'>Address Details</h1>
          <div className='p-6'>
            <form action="" className='space-y-10'>
              <div className='flex flex-col'>
                <label
                  for="state"
                  className='text-sm mx-3  font-medium'

                >
                  State :
                </label>
                <input type="text"
                  id='state'
                  placeholder='Enter your state'
                  className='bg-[#3d7783] rounded-full px-3 py-2 text-white '

                />
              </div>
              <div>
                <label
                  for="state"
                  className='text-sm mx-3  font-medium'

                >
                  State :
                </label>
                <input type="text"
                  id='state'
                  placeholder='Enter your state'
                  className='bg-[#3d7783] rounded-full px-3 py-2 text-white '

                />
              </div>
              <div>
                <label
                  for="state"
                  className='text-sm mx-3  font-medium'

                >
                  State :
                </label>
                <input type="text"
                  id='state'
                  placeholder='Enter your state'
                  className='bg-[#3d7783] rounded-full px-3 py-2 text-white '

                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='flex justify-end mx-16'>
        <button className=' bg-green-600 border text-white text-xl rounded-full px-7 py-2 mt-5'>
          Book Now
        </button>
      </div>
    </section>
  )
}

export default Slot