import React from "react"
import { IoMdCall } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
export default function Contact() {
  return (
    <section className="flex flex-col justify-center items-center bg-[#032830] py-10 ">
      <h1 className="mt-4 text-white text-4xl italic font-semibold">Get in Touch</h1>
      <p className="my-4 text-[#5aa6b6] italic text-xl">Feel free to get in touch with us. We are here to help with any queriesor feedback you have</p>
      <div className="w-3/4 mx-20 rounded-3xl relative flex items-center bg-[#f4f2eb] text-white">
        <div className="bg-[#5aa6b6] mx-5 p-5 h-96 rounded-3xl w-[40%]  space-y-10 py-10">
          <h1 className=" font-sans font-semibold italic">Contact Information</h1>
          <p className="flex gap-5 items-center text-md font-semibold ">
            <IoMdCall className="text-2xl font-bold" />
            9876XXXXXXX
          </p>
          <p className="flex gap-5 items-center text-md font-semibold ">
            <MdOutlineMessage className="text-2xl" />
            neednear@gmail.com
          </p>
          <p className="flex gap-5 items-center text-md font-semibold ">
            <IoLocation className="text-2xl" />
            Location: Saroj Hostel
          </p>
        </div>
        <div className="w-[50%] py-10 ">
          <form action="" className="flex  px-7 flex-col  space-y-5">
            <div className="flex flex-col  justify-center text-black font-semibold  ">
              <label
                for="name"
                className="px-3"
              >
                Your Name
              </label>
              <input type="text"
                placeholder="Write your name here"
                className="rounded-full py-2 px-3 w-full"
              />
            </div>
            <div className="flex flex-col justify-center text-black font-semibold">
              <label
                for="email"
                className="px-3"
              >
                Your Email
              </label>
              <input type="email"
                placeholder="Write your mail here"
                className="rounded-full py-2 px-3 w-full"

              />
            </div>
            <div className="flex flex-col  text-black font-semibold">
              <label
                for="message"
                className="px-3"
              >
                Your Name
              </label>
              <input type="text"
                placeholder="Write here your message"
                className="rounded-xl py-2 pb-16 px-3 w-full "

              />
            </div>
            <div className="flex justify-end">
            <button className="text-md bg-black px-4 rounded-full py-1 ">Submit Message</button>
          </div>
          </form>
          

        </div>
      </div>
    </section>

  )
}




