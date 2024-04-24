import React from 'react';
import { Team } from './index.js';

export default function About() {
  return (
    <div className="bg-[#032830] py-12 lg:py-16">
      <div className="container px-4">
        <div className="grid gap-12 lg:gap-16">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-center text-white">Welcome to Our World</h1>
            <p className="text-lg font-italic tracking-tight text-center text-[#A8DDDA]">
              Discover the magic behind our creations and the passion that drives us forward.
            </p>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-semibold tracking-tight text-white mx-5">Our Achievements</h2>
            <ul className="grid gap-4 list-disc pl-6">
              <li className="flex items-start space-x-2">
                <span className="text-lg text-[#A8DDDA]">Unmatched customer satisfaction</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lg text-[#A8DDDA]">Revolutionary product innovations</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lg text-[#A8DDDA]">Acclaimed industry recognition</span>
              </li>
            </ul>
          </div>
          <div className="space-y-30">
            <h2 className="text-3xl font-semibold tracking-tight text-white text-center">Meet our Team</h2>
            <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 max-w-screen-lg my-20">
              {Team.map((user) => (
                <div key={user.id} className="flex flex-col items-center text-center">
                  <img
                    src={user.src}
                    alt={user.name}
                    width={130}
                    height={130}
                    className="rounded-full"
                  />
                  <div className="mt-4">
                    <h1 className="text-lg font-semibold text-white">{user.name}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
