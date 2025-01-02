"use client";

import React from "react";
const HeroSection = () => {
  return (
    <div className="h-full w-full">
      {/*notification popup */}
      <div className="-[30px] text-white-400 absolute left-20 top-60 h-[90px] w-[30vw] rounded-lg bg-[#000000] bg-opacity-80 p-[7px]">
        
        <div id="header" className="flex flex-row items-center justify-between">
          <div id="left" className="left flex flex-row items-center gap-[5px]">
            <img src="/logo1.png" alt="logo" />
            <p className="font-bold">DEVELOPERS' SOCIETY</p>
          </div>
          <span className="text-white opacity-50">1h ago</span>
        </div>
        <div id="text" className="pl-5px mt-[12px]">
          "A New World For Developers"
        </div>
      </div>
      <div>
        <div className="absolute left-1/2 top-20 size-[25vw] -translate-x-1/2 transform rounded-full bg-[#d739e5]/30 blur-[200px]"></div>
        <img
          src="/logoHeroCenter.png"
          alt=""
          className="absolute left-1/2 top-20 h-[10vw] -translate-x-1/2 transform"
        />
        <div className="absolute right-5 top-0 size-[28vw] rounded-full bg-[#3ddeed]/30 blur-[200px]"></div>
      </div>
      <div className="absolute bottom-0 left-1/2 h-[28vw] w-[45vw] -translate-x-1/2 transform rounded-full bg-[#2a538e] blur-[100px]"></div>
      <img
        src="/globenew.png"
        alt=""
        className="absolute bottom-0 left-1/2 w-[74vw] -translate-x-1/2 transform"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent/30 to-transparent"></div>
      <div className="absolute bottom-[12vh] text-center w-[90vw] text-transparent left-1/2 transform -translate-x-1/2">
        <div
          className="bg-clip-text text-[7.7vw] font-extrabold"
          style={{
            backgroundImage:
              "linear-gradient(to right, #6A0DAD 0%, #CCCCCC 20%, rgba(255, 255, 255, 0) 21%, rgba(255, 255, 255, 0) 75%, #B3B3B3 80%, #6A0DAD 100%)",
          }}
        >
          Dev
          <span
            style={{
              WebkitTextStroke: "1px white",
              color: "transparent",
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
