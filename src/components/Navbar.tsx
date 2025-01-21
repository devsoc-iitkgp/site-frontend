import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/", icon: "home" },
    { name: "About", path: "/about", icon: "about" },
    { name: "Team", path: "/team", icon: "team" },
    { name: "Projects", path: "/projects", icon: "code" },
    { name: "Contact", path: "/contact", icon: "call" },
  ];
  return (
    <nav className="relative flex items-center justify-end space-x-8 font-montserrat text-[18px] lg:space-x-10 xl:space-x-16">
      {links.map((link, index) => (
        <Link key={index} href={link.path} className="relative">
          <div
            className={`flex items-center justify-center space-x-1 transition-all duration-300 ${
              pathname === link.path ? "" : "opacity-45 hover:opacity-100"
            }`}
          >
            <Image
              src={`/${link.icon}.svg`}
              width={24}
              height={24}
              alt={link.icon}
            />
            <span>{link.name}</span>
          </div>
          {pathname === link.path && (
            <div
              className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-[3px]"
              style={{
                background: "linear-gradient(90deg, #7FEEE7 0%, #498884 85.5%)",
              }}
            />
          )}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
