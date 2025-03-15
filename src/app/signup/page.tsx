"use client";

import { FormEvent } from "react";
import Heading from "../../components/Heading";

export default function SignUpPage() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-[url('/TeamsBg.png')] bg-cover bg-center font-montserrat">
      <div className="mt-5">
        <Heading name="Sign Up"></Heading>
      </div>

      {/* <div className="absolute -inset-[2px] rounded-2xl bg-[radial-gradient(circle_at_25%_25%,rgba(1, 1, 1, 1),rgba(203, 252, 255, 1),rgba(255, 255, 255, 1))] z-0 opacity-40 transition-opacity"></div> */}
      {/* <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-[rgba(1,1,1,1)] via-[rgba(203,252,255,1)] to-[rgba(255,255,255,1)]"> */}
      <div className="z-1 relative w-full max-w-md rounded-3xl bg-[radial-gradient(circle_at_25%_25%,rgba(169,235,255,0.2),rgba(110,191,244,0.2),rgba(70,144,212,0.2))] p-8 shadow-lg backdrop-blur-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="rounded border-b border-gray-500 bg-transparent p-2 text-white focus:border-purple-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="rounded border-b border-gray-500 bg-transparent p-2 text-white focus:border-purple-500 focus:outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="mb-4 w-full rounded border-b border-gray-500 bg-transparent p-2 text-white focus:border-purple-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 w-full rounded border-b border-gray-500 bg-transparent p-2 text-white focus:border-purple-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="mb-4 w-full rounded border-b border-gray-500 bg-transparent p-2 text-white focus:border-purple-500 focus:outline-none"
          />
          <div className="mb-6 flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm text-white">
              I Agree with the Terms and conditions
            </label>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-white py-2 font-bold text-black transition-colors hover:bg-gray-200"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-white">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Log In
          </a>
        </p>
      </div>
      {/* </div> */}
    </div>
  );
}
