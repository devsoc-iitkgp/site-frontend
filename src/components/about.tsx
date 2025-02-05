"use client";

import React from "react";
import Image from "next/image";
const About = () => {
    return (
        <>
            <div className="relative top-[1rem] flex justify-center items-center w-full h-[40rem] left-[0]">
                <div
                    className="relative w-[70.69rem] h-[33rem] md:h-[25rem] max-w-[90vw] opacity-90 box-border bg-[radial-gradient(circle_at_15.32%_21.04%,rgba(165,239,255,0.2)_0%,rgba(110,191,244,0.045)_77.08%,rgba(70,144,213,0)_100%)] bg-blend-overlay backdrop-blur-[40px] shadow-[inset_3px_5px_2px_-3.75px_rgba(144,134,134,1),inset_0_-3px_10px_-2px_rgba(198,160,214,0.75)] flex justify-center items-center p-4 rounded-[3.6875rem] text-white"
                >
                    <button className="absolute w-[11.625rem] h-[3.625rem] text-2xl left-1/2 -translate-x-1/2 top-[3rem] bg-gradient-to-b from-[rgba(7,11,30,0.8)] to-[rgba(7,11,28,0.16)] shadow-[inset_3px_5px_2px_-3.75px_rgba(144,134,134,1),inset_0_-3px_10px_-2px_rgba(198,160,214,0.75)] rounded-[0.9375rem] flex justify-center items-center px-2.5 gap-2.5 text-white">
                        About Us
                    </button>
                    <div className="absolute w-[56.81rem] text-lg max-w-[85vw] left-1/2 -translate-x-1/2 top-[9rem] box-border font-montserrat text-base leading-[1.238em] text-center text-white flex items-center p-4 rounded-[0.9375rem]">
                        Developers’ Society is an initiative by the Tech Team of the Technology Students’ Gymkhana, IIT Kharagpur, aimed at fostering and enhancing the software development culture within the institute. Formed by a group of passionate developers, we focus on developing and maintaining applications that serve the student community while promoting innovation and collaboration. By automating workflows and improving existing systems, Developers’ Society strives to build impactful solutions and advance the software development ecosystem at IIT Kharagpur.
                    </div>
                </div>
            </div>

            <div className="w-full h-[1000px] relative overflow-hidden"
            >
                <Image
                    src="/bullet-path.png"
                    alt="bullet-path bg"
                    layout="fill"

                    className="absolute w-full h-[700px] z-0"
                ></Image>
                <div className="relative w-full bg-cover fill-background bg-no-repeat text-center min-h-[700px] mx-0 mt-[100px] px-0 z-10">

                    <div className="absolute left-[15%] top-[6%] flex bg-number-bullet-bg bg-cover bg-center aspect-[1/1] max-w-[150px] min-w-[70px] w-auto items-center justify-center">
                        <p className="text-5xl text-center font-montserrat font-bold text-black rotate-20">
                            1
                        </p>
                    </div>

                    <div className="absolute left-[31%] top-[54%] flex bg-number-bullet-bg bg-cover bg-center aspect-[1/1] max-w-[150px] min-w-[70px] w-auto items-center justify-center">
                        <p className="text-5xl text-center font-montserrat font-bold text-black rotate-25">
                            2
                        </p>
                    </div>

                    <div className="absolute left-[66%] top-[48%] flex bg-number-bullet-bg bg-cover bg-center aspect-[1/1] max-w-[150px] min-w-[70px] w-auto items-center justify-center">
                        <p className="text-5xl text-center font-montserrat font-bold text-black rotate-22.5">
                            3
                        </p>
                    </div>

                    <div className="absolute left-[81%] top-[96%] flex bg-number-bullet-bg bg-cover bg-center aspect-[1/1] max-w-[150px] min-w-[70px] w-auto items-center justify-center">
                        <p className="text-5xl text-center font-montserrat font-bold text-black rotate-15">
                            4
                        </p>
                    </div>


                    <div className="absolute left-[20%] top-[-15%] bg-glass-feature-card bg-cover bg-center flex justify-start items-start aspect-[303/165] p-4 max-w-[350px] w-auto">
                        <div className="flex flex-col h-full px-8 justify-center text-left pb-8">

                            <h1 className="text-white text-4xl font-normal py-4 font-poppins pb-8">
                                Buy and Sell
                            </h1 >
                            <p className="text-white text-base max-w-[250px] font-montserrat">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            </p>
                        </div>
                    </div>
                    <div className="absolute left-[12%] top-[65%] bg-glass-feature-card bg-cover bg-center flex justify-start items-start aspect-[303/165] p-4 max-w-[350px] w-auto">
                        <div className="flex flex-col h-full px-8 justify-center text-left pb-8">

                            <h1 className="text-white text-4xl font-normal py-4 font-poppins pb-8">
                                Travel Share
                            </h1 >
                            <p className="text-white text-base max-w-[250px] font-montserrat">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            </p>
                        </div>
                    </div>
                    <div className="absolute left-[69%] top-[25%] bg-glass-feature-card bg-cover bg-center flex justify-start items-start aspect-[303/165] p-4 max-w-[350px] w-auto">
                        <div className="flex flex-col h-full px-8 justify-center text-left pb-8">

                            <h1 className="text-white text-4xl font-normal py-4 font-poppins pb-8">
                                Live Bus Tracking
                            </h1 >
                            <p className="text-white text-base max-w-[250px] font-montserrat">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            </p>
                        </div>
                    </div>
                    <div className="absolute left-[60%] top-[104%] bg-glass-feature-card bg-cover bg-center flex justify-start items-start aspect-[303/165] p-4 max-w-[350px] w-auto">
                        <div className="flex flex-col h-full px-8 justify-center text-left pb-8">

                            <h1 className="text-white text-4xl font-normal py-4 font-poppins pb-8">
                                Slot Booking
                            </h1 >
                            <p className="text-white text-base max-w-[250px] font-montserrat">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            </p>
                        </div>
                    </div>
                    <div className="absolute left-[45%] top-[49%]">
                        <Image
                            src="apnaInsti-path-logo.svg"
                            alt="Picture of the author"
                            width={150}
                            height={150}
                        ></Image>
                        {/* <img src="apnaInsti-path-logo.svg" alt="" /> */}
                    </div>
                </div >
            </div>






            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[80%] pt-[250px] mx-auto">
                <Image
                    src="bus_tracking_phone.svg"
                    alt="bus-tracking feature"
                    width={387}
                    height={660}
                ></Image>
                <Image
                    src="apnaInsti_phone.svg"
                    alt="logo and phone"
                    width={378}
                    height={654}
                ></Image>
                <Image
                    src="buy_and_sell_phone.svg"
                    alt="buy and sell feature"
                    width={393}
                    height={654}
                ></Image>
            </div>



            <div className="md:bg-apnaInsti-ss-bg bg-center bg-no-repeat bg-contain justify-center w-[80%]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 w-[80%] mx-auto justify-center" >
                    <Image
                        className="mt-[50px] transform scale-[1.1]"
                        src="apnaInsti_home_ss.svg"
                        alt="bus-tracking feature"
                        width={400}
                        height={722}
                    ></Image>
                    <Image
                        className="mt-[250px] transform scale-[1.3] ml-[100px]"
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