"use client";

import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";

function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between bg-transparent p-4 text-white">
      {/* Logo */}
      <div>
        <Image
          src="/logo-devsoc.png"
          alt="devsoc-logo"
          height={45}
          width={45}
        />
      </div>

      {/* Navbar for larger screens */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Hamburger for smaller screens */}
      <div className="block md:hidden">
        <Hamburger />
      </div>
    </header>
  );
}

export default Header;
