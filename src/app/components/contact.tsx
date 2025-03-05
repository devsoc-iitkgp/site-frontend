"use client";
import Image from "next/image";
import React, { useState } from "react";

const socialLinks = [
  {
    href: "https://www.instagram.com",
    src: "/assets/insta-contact.svg",
    alt: "Instagram",
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com",
    src: "/assets/Linkedin-contact.svg",
    alt: "LinkedIn",
    label: "LinkedIn",
  },
  {
    href: "https://www.facebook.com",
    src: "/assets/facebook-contact.svg",
    alt: "Facebook",
    label: "Facebook",
  },
  {
    href: "https://www.github.com",
    src: "/assets/github-contact.svg",
    alt: "GitHub",
    label: "GitHub",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex min-h-screen w-screen flex-col items-center bg-black px-6 py-16 text-white">
      {
        //glows
      }
      <div className="absolute left-[12vw] top-[5vh] h-[600px] w-[600px] transform rounded-full bg-[#D739E5]/20 blur-[100px]"></div>
      <div className="absolute left-[25vw] top-[40vh] h-[400px] w-[400px] transform rounded-full bg-[#3DDEED]/15 blur-[100px]"></div>
      <div className="absolute left-[65vw] top-[1vh] h-[600px] w-[600px] transform rounded-full bg-[#3DDEED]/15 blur-[100px]"></div>
      <div className="absolute left-[65vw] top-[40vh] h-[600px] w-[600px] transform rounded-full bg-[#D739E5]/20 blur-[100px]"></div>


      <div className="relative mx-auto mb-12 w-fit rounded-xl bg-gradient-to-b from-gray-300 to-[#4444] p-[1px]">
        <div className="rounded-xl bg-[#1a1a1a] px-6 py-3 text-center">
          <h1 className="text-center text-4xl font-bold">GET IN TOUCH</h1>
        </div>
      </div>

      <div className="flex h-[70vh] w-[70vw] items-center justify-around gap-10 rounded-[25px] bg-gray-700/30 backdrop-blur-xl border-2 border-gray-400/30">
        {/* Left Side - Map and Contact Info */}
        <div className="space-y-6 rounded-2xl p-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14771.543822596173!2d87.31053100000001!3d22.314927000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d440255555547%3A0x6f2f20dd0c0d6793!2sIndian%20Institute%20of%20Technology%2C%20Kharagpur!5e0!3m2!1sen!2sin!4v1735566943047!5m2!1sen!2sin"
            width="460"
            height="270"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>

          {/* Contact Details */}
          <div className="space-y-4 px-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/assets/phone-contact.svg"
                alt="phone"
                width={24}
                height={24}
              />
              <span>+91 12345 67890</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                src="/assets/mail-contact.svg"
                alt="mail"
                width={24}
                height={24}
              />
              <span>dev.soc@gmail.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 px-4">
            {socialLinks.map(({ href, src, alt, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center space-x-2 rounded-lg bg-gray-700/20 p-3 transition-all duration-300 hover:bg-gray-600/30"
              >
                <Image src={src} alt={alt} width={25} height={25} />
                <span className="text-sm font-medium font-semibold text-white">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="h-[95%] w-[1px] border-r border-gray-600"></div>

        {/* Right Side - Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-10">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border-b border-gray-600 bg-transparent p-3 text-white focus:border-gray-400 focus:outline-none"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-600 bg-transparent p-3 text-white focus:border-gray-400 focus:outline-none"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full border-b border-gray-600 bg-transparent p-3 text-white focus:border-gray-400 focus:outline-none"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />

          <div className="relative w-full border-b border-gray-600 bg-transparent">
            <textarea
              rows={4}
              className="w-full bg-transparent p-3 text-white focus:border-gray-400 focus:outline-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            {!formData.message && (
              <span className="absolute bottom-2 left-3 text-gray-400">
                Write your message...
              </span>
            )}
          </div>

          <button
            type="submit"
            className="rounded-md border-[1px] border-white bg-black bg-opacity-20 px-4 py-3 text-white transition-all duration-300 hover:bg-black hover:bg-opacity-40"
          >
            Send Message →
          </button>
        </form>
      </div>
    </div>
  );
}
