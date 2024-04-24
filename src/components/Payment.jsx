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
    <div class="bg-[#0F3460] min-h-screen flex flex-col items-center justify-center text-white">
  <header class="w-full py-4 px-8 flex justify-between items-center border-b border-[#1E6091]">
    <div class="flex items-center space-x-3">
      <div class="bg-[#1E6091] p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6"
        >
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
          <line x1="4" x2="4" y1="22" y2="15"></line>
        </svg>
      </div>
      <span class="font-bold text-lg">Need Near</span>
    </div>
    <nav class="flex space-x-6">
      <a class="hover:text-[#1E6091]" href="#">
        Home
      </a>
      <a class="hover:text-[#1E6091]" href="#">
        Services
      </a>
      <a class="hover:text-[#1E6091]" href="#">
        About
      </a>
      <a class="hover:text-[#1E6091]" href="#">
        Contact
      </a>
    </nav>
  </header>
  <main class="w-full max-w-4xl p-8">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">Choose payment options</h1>
      <div class="space-x-4">
        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-white bg-[#1E6091]">
          Card
        </button>
        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 px-4 py-2 text-white hover:bg-[#1E6091]">
          UPI
        </button>
        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 px-4 py-2 text-white hover:bg-[#1E6091]">
          Banking
        </button>
      </div>
    </div>
    <div class="bg-white text-black rounded-lg p-8 flex">
      <div class="w-1/3 bg-[#1E6091] text-white p-4 rounded-lg mr-8">
        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4 bg-[#0F3460]">
          Previous Step
        </button>
        <div class="flex flex-col items-center justify-center space-y-4">
          <div class="bg-[#74C69D] p-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-16 w-32"
            >
              <rect width="20" height="14" x="2" y="5" rx="2"></rect>
              <line x1="2" x2="22" y1="10" y2="10"></line>
            </svg>
          </div>
          <div class="text-center">
            <p class="text-sm">** ** ** **</p>
            <p class="text-sm">09/20</p>
          </div>
        </div>
      </div>
      <div class="w-2/3">
        <h2 class="text-2xl font-bold mb-6">Your Payment Details</h2>
        <div class="space-y-4">
          <div>
            <label for="cardholder-name" class="block mb-1">
              CARDHOLDER NAME
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="cardholder-name"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label for="card-number" class="block mb-1">
              CARD NUMBER
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="card-number"
              placeholder="Enter valid card number"
            />
          </div>
          <div class="flex justify-between">
            <div class="w-1/2 pr-2">
              <label for="expiry-date" class="block mb-1">
                EXPIRATION DATE
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="expiry-date"
                placeholder="Enter card expiry date"
              />
            </div>
            <div class="w-1/2 pl-2">
              <label for="cvc" class="block mb-1">
                CVV
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="cvc"
                placeholder="CVV"
              />
            </div>
          </div>
          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full mt-6 bg-[#1E6091]">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  </main>
</div>
  )
}

export default Payment