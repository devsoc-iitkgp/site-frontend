"use client";

import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <>
      <div className="relative left-[0] top-[1rem] flex h-[40rem] w-full items-center justify-center">
        <div className="relative box-border flex h-[33rem] w-[70.69rem] max-w-[90vw] items-center justify-center rounded-[3.6875rem] bg-[radial-gradient(circle_at_15.32%_21.04%,rgba(165,239,255,0.2)_0%,rgba(110,191,244,0.045)_77.08%,rgba(70,144,213,0)_100%)] p-4 text-white opacity-90 bg-blend-overlay shadow-[inset_3px_5px_2px_-3.75px_rgba(144,134,134,1),inset_0_-3px_10px_-2px_rgba(198,160,214,0.75)] backdrop-blur-[40px] md:h-[25rem]">
          <button className="absolute left-1/2 top-[3rem] flex h-[3.625rem] w-[11.625rem] -translate-x-1/2 items-center justify-center gap-2.5 rounded-[0.9375rem] bg-gradient-to-b from-[rgba(7,11,30,0.8)] to-[rgba(7,11,28,0.16)] px-2.5 text-2xl text-white shadow-[inset_3px_5px_2px_-3.75px_rgba(144,134,134,1),inset_0_-3px_10px_-2px_rgba(198,160,214,0.75)]">
            About Us
          </button>
          <div className="absolute left-1/2 top-[9rem] box-border flex w-[56.81rem] max-w-[85vw] -translate-x-1/2 items-center rounded-[0.9375rem] p-4 text-center font-montserrat text-base leading-[1.238em] text-white sm:text-lg">
            Developers’ Society is an initiative by the Tech Team of the
            Technology Students’ Gymkhana, IIT Kharagpur, aimed at fostering and
            enhancing the software development culture within the institute.
            Formed by a group of passionate developers, we focus on developing
            and maintaining applications that serve the student community while
            promoting innovation and collaboration. By automating workflows and
            improving existing systems, Developers’ Society strives to build
            impactful solutions and advance the software development ecosystem
            at IIT Kharagpur.
          </div>
        </div>
      </div>
      <div className="relative hidden h-[1000px] w-full overflow-hidden sm:block">
        <Image
          src="/bullet-path.png"
          alt="bullet-path bg"
          layout="fill"
          className="absolute z-0 h-[700px] w-full"
        ></Image>
        <div className="relative z-10 mx-0 mt-[100px] min-h-[700px] w-full bg-cover bg-no-repeat fill-background px-0 text-center">
          <div className="absolute left-[18%] top-[36%] flex aspect-[1/1] w-auto min-w-[70px] max-w-[150px] items-center justify-center bg-number-bullet-bg bg-cover bg-center">
            <p className="rotate-[20deg] text-center font-montserrat text-5xl font-bold text-black">
              1
            </p>
          </div>

          <div className="absolute left-[31%] top-[66%] flex aspect-[1/1] w-auto min-w-[70px] max-w-[150px] items-center justify-center bg-number-bullet-bg bg-cover bg-center">
            <p className="rotate-[25deg] text-center font-montserrat text-5xl font-bold text-black">
              2
            </p>
          </div>

          <div className="absolute left-[66%] top-[62%] flex aspect-[1/1] w-auto min-w-[70px] max-w-[150px] items-center justify-center bg-number-bullet-bg bg-cover bg-center">
            <p className="rotate-[22.5deg] text-center font-montserrat text-5xl font-bold text-black">
              3
            </p>
          </div>

          <div className="absolute left-[81%] top-[94%] flex aspect-[1/1] w-auto min-w-[70px] max-w-[150px] items-center justify-center bg-number-bullet-bg bg-cover bg-center">
            <p className="rotate-[15deg] text-center font-montserrat text-5xl font-bold text-black">
              4
            </p>
          </div>

          <div className="absolute left-[20%] top-[10%] flex aspect-[303/165] w-auto max-w-[350px] items-start justify-start bg-glass-feature-card bg-cover bg-center p-4">
            <div className="flex h-full flex-col justify-center px-8 pb-8 text-left">
              <h1 className="py-4 pb-8 font-poppins text-4xl font-normal text-white">
                Buy and Sell
              </h1>
              <p className="max-w-[250vw] font-montserrat text-base text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
          </div>
          <div className="absolute left-[10%] top-[80%] flex aspect-[303/165] w-auto max-w-[350px] items-start justify-start bg-glass-feature-card bg-cover bg-center p-4 hd:top-[76%]">
            <div className="flex h-full flex-col justify-center px-8 pb-8 text-left">
              <h1 className="py-4 pb-8 font-poppins text-4xl font-normal text-white">
                Travel Share
              </h1>
              <p className="max-w-[250px] font-montserrat text-base text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </p>
            </div>
          </div>
          <div className="absolute left-[55%] top-[37%] flex aspect-[303/165] w-auto max-w-[350px] items-start justify-start bg-glass-feature-card bg-cover bg-center p-4 hd:left-[69%] hd:top-[35%]">
            <div className="flex h-full flex-col justify-center px-8 pb-8 text-left">
              <h1 className="py-4 pb-8 font-poppins text-4xl font-normal text-white">
                Live Bus Tracking
              </h1>
              <p className="max-w-[250px] font-montserrat text-base text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </p>
            </div>
          </div>
          <div className="absolute left-[55%] top-[104%] flex aspect-[303/165] w-auto max-w-[350px] items-start justify-start bg-glass-feature-card bg-cover bg-center p-4 md:left-[60%]">
            <div className="flex h-full flex-col justify-center px-8 pb-8 text-left">
              <h1 className="py-4 pb-8 font-poppins text-4xl font-normal text-white">
                Slot Booking
              </h1>
              <p className="max-w-[250px] font-montserrat text-base text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </p>
            </div>
          </div>
          <div className="absolute left-[45%] top-[60%]">
            <Image
              src="apnaInsti-path-logo.svg"
              alt="Picture of the author"
              width={150}
              height={150}
            ></Image>
          </div>
        </div>
      </div>
      <div className="mx-auto grid w-[80%] grid-cols-1 gap-4 pt-[250px] sm:grid-cols-2 md:grid-cols-3">
        <div className="w-full bg-phone-bg bg-contain bg-center bg-no-repeat p-5">
          <h1 className="py-4 pb-8 pt-6 text-center font-poppins text-2xl font-medium text-white hd:text-3xl">
            BUY AND SELL
          </h1>
          <div className="flex justify-center">
            <Image
              src="buy-and-sell-screenshot.svg"
              alt="Picture of buy and sell"
              width={250}
              height={1200}
              className="pl-[2px]"
            ></Image>
          </div>
        </div>
        <div className="w-full bg-contain bg-center bg-no-repeat p-5">
          <div className="flex justify-center pt-[85px]">
            <Image
              src="apnaInsti_phone.svg"
              alt="Picture of buy and sell"
              width={278}
              height={1200}
              className="pl-[2px]"
            ></Image>
          </div>
        </div>
        {/* <Image
          src="apnaInsti_phone.svg"
          alt="logo and phone"
          width={378}
          height={654}
          className="pt-[40px]"
        ></Image> */}
        {/* <div className="bg-phone-bg bg-contain bg-center bg-no-repeat p-5">
          <h1 className="py-4 pb-8 text-center font-poppins text-3xl font-medium text-white">
            BUS TRACKING
          </h1>
          <div className="flex justify-center">
            <Image
              src="bus-tracking-screenshot.svg"
              alt="Picture of bus tracking"
              width={275}
              height={1200}
              className="pl-[2px]"
            ></Image>
          </div>
        </div> */}
        <div className="w-full bg-phone-bg bg-contain bg-center bg-no-repeat p-5">
          <h1 className="py-4 pb-8 pt-6 text-center font-poppins text-2xl font-medium text-white hd:text-3xl">
            BUS TRACKING
          </h1>
          <div className="flex justify-center">
            <Image
              src="bus-tracking-screenshot.svg"
              alt="Picture of buy and sell"
              width={250}
              height={1200}
              className="pl-[2px]"
            ></Image>
          </div>
        </div>
      </div>

      <div className="w-[80%] justify-center bg-contain bg-center bg-no-repeat md:bg-apnaInsti-ss-bg">
        <div className="mx-auto grid w-[80%] grid-cols-1 justify-center gap-x-4 sm:grid-cols-2 md:grid-cols-2">
          <Image
            className="mt-[50px] scale-[1.1] transform"
            src="apnaInsti_home_ss.svg"
            alt="bus-tracking feature"
            width={400}
            height={722}
          ></Image>
          <Image
            className="mt-[250px] scale-[1.3] transform sm:ml-[100px]"
            src="apnaInsti_menu_ss.svg"
            alt="Picture of the author"
            width={545}
            height={695}
          ></Image>
        </div>
      </div>
    </>
  );
};

export default About;
