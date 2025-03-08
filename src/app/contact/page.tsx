import Image from "next/image";
import React from "react";
import Form from "../components/Form";

const socialLinks = [
  {
    href: "https://www.instagram.com/devsoc.iitkgp/",
    src: "/assets/icons/instagram.svg",
    alt: "Instagram",
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/devsoc-iitkgp",
    src: "/assets/icons/linkedin.svg",
    alt: "LinkedIn",
    label: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/devsoc.iitkgp",
    src: "/assets/icons/facebook.svg",
    alt: "Facebook",
    label: "Facebook",
  },
  {
    href: "https://github.com/devsoc-iitkgp/",
    src: "/assets/icons/github.svg",
    alt: "GitHub",
    label: "GitHub",
  },
];

function page() {
  return (
    <div className="relative flex min-h-screen w-screen flex-col items-center overflow-hidden bg-black px-4 py-10 text-white">
      {/* Glowing Background Effects */}
      <div className="absolute left-[12vw] top-[5vh] h-[600px] w-[600px] rounded-full bg-[#D739E5]/20 blur-[100px]"></div>
      <div className="absolute left-[25vw] top-[40vh] h-[400px] w-[400px] rounded-full bg-[#3DDEED]/15 blur-[100px]"></div>
      <div className="absolute left-[65vw] top-[1vh] h-[600px] w-[600px] rounded-full bg-[#3DDEED]/15 blur-[100px]"></div>
      <div className="absolute left-[65vw] top-[40vh] h-[600px] w-[600px] rounded-full bg-[#D739E5]/20 blur-[100px]"></div>

      <div className="relative mx-auto mb-8 w-fit rounded-xl bg-gradient-to-b from-gray-300 to-[#4444] p-[1px]">
        <div className="rounded-xl bg-[#1a1a1a] px-4 py-2 text-center">
          <h1 className="text-2xl font-bold lg:text-3xl">GET IN TOUCH</h1>
        </div>
      </div>

      {/* Main container */}
      <div className="flex w-[90vw] flex-col items-center justify-center gap-6 rounded-[25px] border-2 border-gray-400/30 bg-gray-700/30 p-6 backdrop-blur-xl lg:min-h-[700px] lg:flex-row lg:items-stretch 2xl:w-[75vw]">
        {/* Left Side - Map and Contact Info */}
        <div className="flex w-[85%] flex-col items-center justify-around gap-6 rounded-2xl sm:min-h-[300px] lg:w-[45%] lg:items-start">
          {/* Map Container */}
          <div className="w-full sm:h-[250px] lg:aspect-video lg:h-auto lg:max-w-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14771.543822596173!2d87.31053100000001!3d22.314927000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d440255555547%3A0x6f2f20dd0c0d6793!2sIndian%20Institute%20of%20Technology%2C%20Kharagpur!5e0!3m2!1sen!2sin!4v1735566943047!5m2!1sen!2sin"
              className="h-full w-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Details & Social Links for Larger Devices */}
          <div className="hidden space-y-8 lg:block">
            <div className="space-y-4 px-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/assets/icons/phone.svg"
                  alt="phone"
                  width={22}
                  height={22}
                />
                <span className="text-md">+91 98213 91634</span>
              </div>
              <div className="flex items-center space-x-3">
                <Image
                  src="/assets/icons/mail.svg"
                  alt="mail"
                  width={24}
                  height={24}
                />
                <a
                  href="mailto:devsoc.iitkgp@gmail.com"
                  className="text-md hover:underline"
                >
                  devsoc.iitkgp@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links - Left aligned */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-8 px-4">
              {socialLinks.map(({ href, src, alt, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center space-x-3 rounded-lg bg-gray-700/20 p-3 transition-all duration-300 hover:bg-gray-600/30"
                >
                  <Image src={src} alt={alt} width={25} height={25} />
                  <span className="text-sm font-medium text-white">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Divider for LG and above */}
        <div className="hidden w-[1px] self-stretch border-r border-gray-600 lg:block"></div>

        {/* Right Side - Contact Form */}
        <Form />
        {/* Social Links for Smaller Devices */}
        <div className="mt-2 flex w-full flex-col items-center gap-4 lg:hidden">
          <div className="flex flex-col items-center gap-2 px-4">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/icons/phone.svg"
                alt="phone"
                width={20}
                height={20}
              />
              <span className="text-lg">+91 12345 67890</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/icons/mail.svg"
                alt="mail"
                width={24}
                height={24}
              />
              <span className="text-lg">dev.soc@gmail.com</span>
            </div>
          </div>

          <div className="mt-6 grid w-full grid-cols-2 gap-x-8 gap-y-4 px-4">
            {socialLinks.map(({ href, src, alt, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center gap-2 rounded-lg bg-gray-700/20 p-3 transition-all duration-300 hover:bg-gray-600/30"
              >
                <Image src={src} alt={alt} width={25} height={25} />
                <span className="text-sm font-medium text-white">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
