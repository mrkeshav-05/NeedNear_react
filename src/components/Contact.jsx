import React from "react"

export default function Contact() {
  return (
    <div className="flex justify-center border">
      <div className="container grid max-w-3xl px-4 gap-10 py-12 md:py-24">
        <div className="space-y-4">
          <div className="space-y-2 ">
            <h1 className="text-4xl  tracking-tighter sm:text-5xl md:text-6xl hover:text-slate-700 font-bold">Get in touch</h1>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
              We're here to help. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 flex flex-col">
                <label htmlFor="first-name">First name</label>
                <input id="first-name" placeholder="Enter your first name" className="border rounded-md py-2 px-2" />
              </div>
              <div className="space-y-2 flex flex-col">
                <label htmlFor="last-name">Last name</label>
                <input id="last-name" placeholder="Enter your last name" className="border rounded-md py-2 px-2" />
              </div>
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="email">Email</label>
              <input id="email" placeholder="Enter your email" type="email" className="border rounded-md py-2 px-2" />
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Enter your message" className="border rounded-md py-2 px-2 min-h-[100px]" />
            </div>
            <button className="p-2  border-green-700 border-2 rounded-md hover:bg-green-300 bg-green-400">Send message</button>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Contact information</h2>
          <div className="space-y-2">
            <dl className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <dt className="text-lg font-semibold">Email</dt>
                <dd className="text-gray-500 dark:text-gray-400">info@example.com</dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <dt className="text-lg font-semibold">Phone</dt>
                <dd className="text-gray-500 dark:text-gray-400">+1 234 567 890</dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <dt className="text-lg font-semibold">Address</dt>
                <dd className="text-gray-500 dark:text-gray-400">123 Street Rd, City, Country</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>

  )
}




