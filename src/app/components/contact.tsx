"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const socialLinks = [
  { href: 'https://www.instagram.com', src: '/assets/insta-contact.svg', alt: 'Instagram', label: 'Instagram' },
  { href: 'https://www.linkedin.com', src: '/assets/Linkedin-contact.svg', alt: 'LinkedIn', label: 'LinkedIn' },
  { href: 'https://www.facebook.com', src: '/assets/facebook-contact.svg', alt: 'Facebook', label: 'Facebook' },
  { href: 'https://www.github.com', src: '/assets/github-contact.svg', alt: 'GitHub', label: 'GitHub' },
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
    <div className="flex flex-col items-center min-h-screen w-screen px-6 py-16 bg-gray-900 text-white">
      <h1 className="mb-12 text-center text-4xl font-bold">Get in Touch</h1>

      <div className="flex gap-10 justify-around items-center rounded-xl w-[70vw] h-[70vh] bg-gray-800/50  backdrop-blur-xl">

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
              <Image src="/assets/phone-contact.svg" alt="phone" width={24} height={24} />
              <span>+91 12345 67890</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image src="/assets/mail-contact.svg" alt="mail" width={24} height={24} />
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
                className="flex items-center space-x-2 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300"
              >
                <Image src={src} alt={alt} width={25} height={25} />
                <span className="text-sm font-medium text-white font-semibold">{label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="h-[95%] w-[1px] border-r border-gray-600 "></div>

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

          <textarea
            placeholder="Write your message..."
            rows={4}
            className="w-full border-b border-gray-600 bg-transparent p-3 text-white focus:border-gray-400 focus:outline-none"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />

          <button
            type="submit"
            className="px-4 border-[1px] border-white rounded-md bg-black bg-opacity-20 py-3 text-white transition-all duration-300 hover:bg-black hover:bg-opacity-40"
          >
            Send Message →
          </button>

        </form>

      </div>

    </div>
  );
}
