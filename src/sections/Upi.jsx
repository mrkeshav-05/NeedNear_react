import React from 'react'

const Upi = () => {
  return (
    // <div>Upi</div>
    <div class="bg-[#0F4C75] min-h-screen flex flex-col items-center justify-center">
  <header class="absolute top-0 left-0 right-0 flex justify-between items-center p-4">
    <div class="text-black text-2xl font-bold">NN</div>
    <nav>
      <ul class="flex space-x-4">
        <li>
          <a href="#" class="text-black hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="#" class="text-black hover:text-gray-300">
            Services
          </a>
        </li>
        <li>
          <a href="#" class="text-black hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#" class="text-black hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
  <div class="bg-[#3282B8] rounded-lg p-8 w-full max-w-2xl">
    <div class="flex items-center justify-between mb-6">
      <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-black">
        Previous Step
      </button>
      <h1 class="text-black text-3xl font-bold">Pay By Any UPI App</h1>
      <div></div>
    </div>
    <div class="space-y-4">
      <div class="flex items-center p-4 bg-white rounded-lg shadow">
        <input id="gpay" class="hidden peer" type="radio" checked="" name="payment" />
        <label for="gpay" class="flex items-center cursor-pointer space-x-4 w-full">
          <span class="peer-checked:bg-white peer-checked:text-[#0F4C75] rounded-full p-2">
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
              <line x1="12" x2="12" y1="2" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </span>
          <span class="text-lg font-medium text-black">Google Pay</span>
        </label>
      </div>
      <div class="flex items-center p-4 bg-white rounded-lg shadow">
        <input id="paypal" class="hidden peer" type="radio" name="payment" />
        <label for="paypal" class="flex items-center cursor-pointer space-x-4 w-full">
          <span class="peer-checked:bg-white peer-checked:text-[#0F4C75] rounded-full p-2">
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
              <line x1="12" x2="12" y1="2" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </span>
          <span class="text-lg font-medium text-black">PayPal</span>
        </label>
      </div>
      <div class="flex items-center p-4 bg-white rounded-lg shadow">
        <input id="paytm" class="hidden peer" type="radio" name="payment" />
        <label for="paytm" class="flex items-center cursor-pointer space-x-4 w-full">
          <span class="peer-checked:bg-white peer-checked:text-[#0F4C75] rounded-full p-2">
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
              <path d="M6 3h12"></path>
              <path d="M6 8h12"></path>
              <path d="m6 13 8.5 8"></path>
              <path d="M6 13h3"></path>
              <path d="M9 13c6.667 0 6.667-10 0-10"></path>
            </svg>
          </span>
          <span class="text-lg font-medium text-black">Paytm</span>
        </label>
      </div>
      <div class="flex items-center p-4 bg-white rounded-lg shadow">
        <input id="amazonpay" class="hidden peer" type="radio" name="payment" />
        <label for="amazonpay" class="flex items-center cursor-pointer space-x-4 w-full">
          <span class="peer-checked:bg-white peer-checked:text-[#0F4C75] rounded-full p-2">
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
              <line x1="12" x2="12" y1="2" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </span>
          <span class="text-lg font-medium text-black">Amazon Pay</span>
        </label>
      </div>
    </div>
  </div>
</div>
  )
}

export default Upi