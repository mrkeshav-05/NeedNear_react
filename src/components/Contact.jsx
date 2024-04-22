import React from "react"
import { IoMdCall } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
export default function Contact() {
  return (
    <section className="flex flex-col justify-center items-center ">
      <h1>Get in Touch</h1>
      <p>Feel free to get in touch with us. We are here to help with any queriesor feedback you have</p>
      <div className="w-3/4  border mx-20 flex items-center bg-[#f4f2eb] text-white">
        <div className="bg-[#5aa6b6] m-5 p-5 w-[40%] space-y-10 py-10">
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
        <div className="w-[50%] border ">
          <form action="" className="flex flex-col  space-y-10">
            <div className="flex flex-col justify-center text-black font-semibold  ">
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
            <div>
              <label
                for="email"
              >
                Your Email
              </label>
              <input type="email"
                placeholder="Write your mail here"
              />
            </div>
            <div>
              <label
                for="message"
              >
                Your Name
              </label>
              <input type="text"
                placeholder="Write here your message"
              />
            </div>
          </form>
          <button>Submit</button>
        </div>
      </div>
    </section>

  )
}




