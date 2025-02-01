import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="group z-50 flex h-8 w-8 flex-col justify-between focus:outline-none md:hidden"
      >
        <span
          className={`h-1 w-full transform rounded bg-white transition duration-300 ${
            isOpen ? "translate-y-2.5 rotate-45" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full rounded bg-white transition duration-300 ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`h-1 w-full transform rounded bg-white transition duration-300 ${
            isOpen ? "-translate-y-2.5 -rotate-45" : ""
          }`}
        ></span>
      </button>

      {/* Full-Screen Drawer Menu */}
      <div
        className={`fixed left-0 top-0 h-full w-full transform bg-black text-white ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-40 transition-transform duration-500 ease-in-out`}
      >
        <button
          onClick={toggleMenu}
          className="absolute right-6 top-6 text-4xl font-bold text-white focus:outline-none"
        >
          ✕
        </button>
        <nav className="flex h-full flex-col items-center justify-center space-y-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              onClick={toggleMenu}
              className={`text-2xl font-semibold transition-colors ${
                pathname === link.path
                  ? "text-[#7FEEE7]"
                  : "text-white hover:text-[#7FEEE7]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Hamburger;
