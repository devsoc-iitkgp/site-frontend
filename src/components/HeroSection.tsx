"use client";

import React from "react";
import GlobeDemo from "./globe-demo";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute bottom-0 left-1/2 h-[28vw] w-[45vw] -translate-x-1/2 transform rounded-full bg-[#2a538e] blur-[100px]"></div>
      {/* Remove the old globe image */}
      {/* <img
        src="/globenew.png"
        alt=""
        className="absolute bottom-0 left-1/2 h-[500px] min-h-[50vh] -translate-x-1/2 transform object-cover lg:h-[600px]"
      /> */}
      {/* Move the globe down and set z-index lower than text and logo */}
      <div className="z-100 absolute left-1/2 flex w-full -translate-x-1/2 justify-center " style={{ background: "transparent", boxShadow: "none", border: "none" }}>
        <div className="max-w-10xl w-full">
          <GlobeDemo />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent/20 to-transparent"></div>

      {/* Fade to black at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black via-black/90 to-transparent"></div>

      {/* Notification popup */}
      <div className="absolute left-[2rem] top-[19rem] h-[3.9rem] w-[60vw] rounded-lg bg-gradient-to-r from-[#CEFCFF] via-white to-[#8726B7] p-[2px] sm:left-[2rem] sm:top-[17rem] sm:h-[91px] sm:w-[480px]">
        <div className="h-full w-full rounded-lg bg-opacity-100 bg-gradient-to-r from-[#000000] via-[#000000] to-[#162536]">
          <div
            id="header"
            className="flex flex-row items-center justify-between"
          >
            <div
              id="left"
              className="left pointer-events-none flex select-none flex-row items-center gap-[2.5px] sm:gap-[5px]"
            >
              <img
                src="/logo1.png"
                alt="logo"
                className="h-[20px] w-[20px] pl-[4px] pt-[2px] sm:h-[40px] sm:w-[40px]"
              />
              <p className="point-events-none select-none pl-[2px] text-[8px] font-bold sm:text-[16px]">
                DEVELOPERS&apos; SOCIETY
              </p>
            </div>
            <span className="point-events-none select-none p-[10px] text-[9px] text-white opacity-50 sm:text-[12px]">
              1h ago
            </span>
          </div>
          <div
            id="text"
            className="point-events-none mt-[2px] select-none pl-[2.5px] text-[10px] sm:mt-[12px] sm:pl-[5px] sm:text-[16px]"
          >
            &quot;A New World For Developers&quot;
          </div>
        </div>
      </div>
      {/* logo at center */}
      <div className="relative z-30 mx-auto flex w-full max-w-6xl justify-center">
        {/* Ring that goes behind the logo */}
        {/* <div className="animate-rotateRing absolute top-[6rem] sm:top-[7rem] h-[8rem] w-[8rem] sm:h-[7rem] sm:w-[7rem] md:h-[8rem] md:w-[8rem] lg:h-[12rem] lg:w-[12rem] transform rounded-full border-[6px] border-solid border-violet-300 border-l-transparent border-r-transparent" style={{ zIndex: 10 }}></div> */}

        {/* Ring that goes in front of the logo */}
        {/* <div className="animate-rotateRingDelayed absolute top-[6rem] sm:top-[7rem] h-[8rem] w-[8rem] sm:h-[7rem] sm:w-[7rem] md:h-[8rem] md:w-[8rem] lg:h-[12rem] lg:w-[12rem] transform rounded-full border-[6px] border-solid border-violet-300 border-l-transparent border-r-transparent" style={{ zIndex: 100 }}></div> */}

        <div className="absolute top-[5rem] size-[40vw] min-h-[15vh] transform rounded-full bg-[#d739e5]/30 blur-[50px] sm:top-[2rem] sm:size-[28vw] sm:blur-[80px] md:blur-[110px] lg:blur-[160px]"></div>
        <img
          src="/logo-devsoc.png"
          alt="devsoc-logo"
          className="absolute top-[7rem] h-[6rem] min-h-[4vh] transform sm:top-[5rem] sm:h-[5rem] md:h-[6rem] lg:top-[8rem] lg:h-[10rem]"
          style={{ zIndex: 50 }}
        />
        <div className="pointer-events-none absolute right-5 top-0 size-[28vw] rounded-full bg-[#3ddeed]/30 blur-[200px] md:blur-[130px] lg:blur-[160px] xl:blur-[200px]"></div>
      </div>

      {/* text at center */}
      <div className="pointer-events-none absolute bottom-[20vh] left-1/2 z-40 w-[90vw] -translate-x-1/2 transform select-none text-center text-transparent sm:bottom-[25vh]">
        {/* md and below: no gradient, just transparent fill + stroke + subtle shadow. lg and up: gradient */}
        <div className="block lg:hidden">
          <span
            className="text-[14vw] font-extrabold text-transparent sm:text-[8vw]"
            style={{
              WebkitTextStroke: "0.5px white",
              color: "rgba(0,0,0,0.5)",
              opacity: 0.6,
              filter: "saturate(90%)",
              textShadow:
                "0 2px 8px rgba(255,255,255,0.08), 0 1px 2px rgba(0,0,0,0.15)",
            }}
          >
            Developers&apos; Society
          </span>
        </div>
        <div
          className="hidden bg-clip-text text-[14vw] font-extrabold text-transparent sm:text-[8vw] lg:block"
          style={{
            backgroundImage:
              "linear-gradient(to right, #6A0DAD 0%, #CCCCCC 18%, rgba(255, 255, 255, 0) 22%, rgba(255, 255, 255, 0) 78%, #B3B3B3 82%, #6A0DAD 100%)",
            opacity: 0.6,
            filter: "saturate(90%)",
          }}
        >
          Dev
          <span
            style={{
              WebkitTextStroke: "0.5px white",
              color: "rgba(0, 0, 0, 0.5)",
            }}
            className="backdrop-blur-lg"
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
