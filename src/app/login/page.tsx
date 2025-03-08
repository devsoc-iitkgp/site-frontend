"use client";

import React from "react";
import { FormEvent } from "react";
import Heading from "@/components/Heading";

export default function Login() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-[url('/TeamsBg.png')] bg-cover bg-center font-montserrat">
      <div className="mt-5">
        <Heading name="Log In"></Heading>
      </div>

      {/* <div className="absolute -inset-[2px] rounded-2xl bg-[radial-gradient(circle_at_25%_25%,rgba(1, 1, 1, 1),rgba(203, 252, 255, 1),rgba(255, 255, 255, 1))] z-0 opacity-40 transition-opacity"></div> */}
      {/* <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-[rgba(1,1,1,1)] via-[rgba(203,252,255,1)] to-[rgba(255,255,255,1)]"> */}
      <div className="z-1 relative flex h-96 w-3/5 max-w-md flex-col justify-center rounded-3xl bg-[radial-gradient(circle_at_25%_25%,rgba(169,235,255,0.2),rgba(110,191,244,0.2),rgba(70,144,212,0.2))] p-8 shadow-lg backdrop-blur-sm sm:w-2/5 lg:w-96">
        <form onSubmit={handleSubmit}>
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

          <div className="mb-6 flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm text-white">Remember Me</label>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-white py-2 font-bold text-black transition-colors hover:bg-gray-200"
          >
            Log In
          </button>
        </form>
        <p className="mt-12 text-center text-sm text-white">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
      {/* </div> */}
    </div>
  );
}
