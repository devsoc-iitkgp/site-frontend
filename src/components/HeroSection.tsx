"use client";

import React from "react";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="h-[95vh]">
      <div className="absolute bottom-0 left-1/2 h-[28vw] w-[45vw] -translate-x-1/2 transform rounded-full bg-[#2a538e] blur-[100px]"></div>
      <img
        src="/globenew.png"
        alt=""
        className="absolute bottom-0 left-1/2 h-[300px] min-h-[35vh] -translate-x-1/2 transform object-cover lg:h-[380px]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent/30 to-transparent"></div>

      {/* Notification popup */}
      <div className="absolute left-[2rem] top-[19rem] h-[3.9rem] w-[60vw] rounded-lg bg-gradient-to-r from-[#CEFCFF] via-white to-[#8726B7] p-[2px] sm:left-[2rem] sm:top-[17rem] sm:h-[91px] sm:w-[480px]">
        <div className="h-full w-full rounded-lg bg-opacity-100 bg-gradient-to-r from-[#000000] via-[#000000] to-[#162536]">
          <div
            id="header"
            className="flex flex-row items-center justify-between"
          >
            <div
              id="left"
              className="left flex flex-row items-center gap-[2.5px] sm:gap-[5px]"
            >
              <img
                src="/logo1.png"
                alt="logo"
                className="h-[20px] w-[20px] pl-[4px] pt-[2px] sm:h-[40px] sm:w-[40px]"
              />
              <p className="pl-[2px] text-[8px] font-bold sm:text-[16px]">
                DEVELOPERS&apos; SOCIETY
              </p>
            </div>
            <span className="p-[10px] text-[9px] text-white opacity-50 sm:text-[12px]">
              1h ago
            </span>
          </div>
          <div
            id="text"
            className="mt-[2px] pl-[2.5px] text-[10px] sm:mt-[12px] sm:pl-[5px] sm:text-[16px]"
          >
            &quot;A New World For Developers&quot;
          </div>
        </div>
      </div>
      {/* logo at center */}
      <div className="w-10">
        <div className="rotate-ring absolute left-[43%] top-[7rem] h-[12rem] w-[12rem] -translate-x-1/2 transform rounded-full border-[4px] border-solid border-violet-300 border-l-transparent border-r-transparent"></div>

        <div className="absolute left-1/2 top-[5rem] size-[40vw] min-h-[15vh] -translate-x-1/2 transform rounded-full bg-[#d739e5]/30 blur-[50px] sm:top-[2rem] sm:size-[28vw] sm:blur-[80px] md:blur-[110px] lg:blur-[160px]"></div>
        <img
          src="/logo-devsoc.png"
          alt="devsoc-logo"
          className="absolute left-1/2 top-[7rem] z-50 h-[6rem] min-h-[4vh] -translate-x-1/2 transform sm:top-[5rem] sm:h-[5rem] md:h-[6rem] lg:top-[8rem] lg:h-[10rem]"
        />
        <div className="pointer-events-none absolute right-5 top-0 size-[28vw] rounded-full bg-[#3ddeed]/30 blur-[200px] md:blur-[130px] lg:blur-[160px] xl:blur-[200px]"></div>
      </div>

      {/* text at center */}
      <div className="absolute bottom-[6vh] left-1/2 w-[90vw] -translate-x-1/2 transform text-center text-transparent sm:bottom-[12vh]">
        <div
          className="bg-clip-text text-[14vw] font-extrabold sm:text-[8vw]"
          style={{
            backgroundImage:
              typeof window !== "undefined" && window.innerWidth >= 640
                ? "linear-gradient(to right, #6A0DAD 0%, #CCCCCC 20%, rgba(255, 255, 255, 0) 22%, rgba(255, 255, 255, 0) 78%, #B3B3B3 80%, #6A0DAD 100%)"
                : "linear-gradient(to right, #6A0DAD 0%, #CCCCCC 35%, #B3B3B3 65%, #6A0DAD 100%)",
          }}
        >
          Dev
          <span
            style={{
              WebkitTextStroke:
                typeof window !== "undefined" && window.innerWidth >= 640
                  ? "1px white"
                  : "none",
              color:
                typeof window !== "undefined" && window.innerWidth >= 640
                  ? "transparent"
                  : "inherit",
            }}
          >
            elopers&apos; Soc
          </span>
          iety
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
