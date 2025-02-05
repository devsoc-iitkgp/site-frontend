"use client";

import React from "react";
const HeroSection = () => {
  return (
    <div className="">

      <div className="absolute bottom-0 left-1/2 h-[28vw] w-[45vw] -translate-x-1/2 transform rounded-full bg-[#2a538e] blur-[100px]"></div>
      <img
        src="/globenew.png"
        alt=""
        className="absolute bottom-0 left-1/2 h-[300px] min-h-[35vh] -translate-x-1/2 transform object-cover  lg:h-[380px] "
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent/30 to-transparent"></div>



      {/* Notification popup */}
      <div className="absolute left-[2rem] top-[16rem] h-[48px] w-[250px] rounded-lg bg-[#000000] bg-opacity-80 p-[7px] sm:h-[91px] sm:w-[480px] sm:left-[2rem] sm:top-[17rem]">
        <div id="header" className="flex flex-row items-center justify-between">
          <div
            id="left"
            className="left flex flex-row items-center gap-[2.5px] sm:gap-[5px]"
          >
            <img
              src="/logo1.png"
              alt="logo"
              className="h-[20px] w-[20px] sm:h-[40px] sm:w-[40px]"
            />
            <p className="text-[8px] font-bold sm:text-[16px]">DEVELOPERS' SOCIETY</p>
          </div>
          <span className="text-white opacity-50 text-[6px] sm:text-[12px]">
            1h ago
          </span>
        </div>
        <div
          id="text"
          className="pl-[2.5px] mt-[6px] text-[10px] sm:pl-[5px] sm:mt-[12px] sm:text-[16px]"
        >
          "A New World For Developers"
        </div>

      </div>




      <div>
        <div
          className="absolute left-1/2 top-[5rem] size-[40vw] -translate-x-1/2 transform rounded-full min-h-[15vh] bg-[#d739e5]/30 blur-[50px] sm:blur-[80px] sm:top-[2rem] sm:size-[28vw] md:blur-[110px] lg:blur-[160px]"
        ></div>
        <img
          src="/logoHeroCenter.png"
          alt=""
          className="absolute left-1/2 top-[6rem] h-[6rem] min-h-[10vh] -translate-x-1/2 transform sm:top-[5rem] sm:h-[8rem] md:h-[10rem] lg:h-[12rem] lg:top-[6rem]"
        />
        <div className="absolute right-5 top-0 size-[28vw] rounded-full bg-[#3ddeed]/30 blur-[200px] xl:blur-[200px] lg:blur-[160px] md:blur-[130px] "></div>
      </div>


      <div className="absolute bottom-[6vh] text-center w-[90vw] text-transparent left-1/2 transform -translate-x-1/2 sm:bottom-[12vh]">
        <div
          className="bg-clip-text text-[16vw] font-extrabold sm:text-[9vw]"
          style={{
            backgroundImage:
            window.innerWidth >= 640 ?"linear-gradient(to right, #6A0DAD 0%, #CCCCCC 20%, rgba(255, 255, 255, 0) 22%, rgba(255, 255, 255, 0) 78%, #B3B3B3 80%, #6A0DAD 100%)":"linear-gradient(to right, #6A0DAD 0%, #CCCCCC 35%, #B3B3B3 65%, #6A0DAD 100%)",
          }}
        >
          Dev
          <span
            style={{
              WebkitTextStroke: window.innerWidth >= 640 ? "1px white" : "none",
              color: window.innerWidth >= 640 ? "transparent" : "inherit",
            }}
          >
            eloper's Soc
          </span>
          iety
        </div>
      </div>
    </div>

  );
};

export default HeroSection;
