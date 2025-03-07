import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  // Adds opacity to the links when they are not active
  const getLinkClasses = (path: string): string => {
    return `flex items-center justify-center space-x-1 transition-all duration-300 ${
      pathname === path ? "" : "opacity-45 hover:opacity-100"
    }`;
  };

  // Shows active indicator(Underline) for the current page
  const renderActiveIndicator = (path: string): React.ReactNode => {
    if (pathname === path) {
      return (
        <div
          className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-[3px]"
          style={{
            background: "linear-gradient(90deg, #7FEEE7 0%, #498884 85.5%)",
          }}
        />
      );
    }
    return null;
  };

  //Removed the Map and separated the links to edit the individual logo sizes
  return (
    <nav className="relative flex items-center justify-end space-x-8 font-montserrat text-[18px] lg:space-x-10 xl:space-x-16">
      {/* Home Link */}
      <Link href="/" className="relative">
        <div className={getLinkClasses("/")}>
          <Image src="/home.svg" width={23} height={23} alt="home" />
          <span>Home</span>
        </div>
        {renderActiveIndicator("/")}
      </Link>

      {/* About Link */}
      <Link href="/about" className="relative">
        <div className={getLinkClasses("/about")}>
          <Image src="/about.svg" width={23} height={23} alt="about" />
          <span>About</span>
        </div>
        {renderActiveIndicator("/about")}
      </Link>

      {/* Team Link */}
      <Link href="/team" className="relative">
        <div className={getLinkClasses("/team")}>
          <Image src="/team.svg" width={19} height={19} alt="team" />
          <span>Team</span>
        </div>
        {renderActiveIndicator("/team")}
      </Link>

      {/* Projects Link */}
      <Link href="/projects" className="relative">
        <div className={getLinkClasses("/projects")}>
          <Image src="/code.svg" width={23} height={23} alt="code" />
          <span>Projects</span>
        </div>
        {renderActiveIndicator("/projects")}
      </Link>

      {/* Contact Link */}
      <Link href="/contact" className="relative">
        <div className={getLinkClasses("/contact")}>
          <Image src="/call.svg" width={23} height={23} alt="call" />
          <span>Contact</span>
        </div>
        {renderActiveIndicator("/contact")}
      </Link>
    </nav>
  );
};

export default Navbar;
