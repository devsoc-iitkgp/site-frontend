"use client";
// import Image from 'next/image'
import React from "react";
import { useState } from "react";
import Link from "next/link";

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
    <div className="min-h-screen w-full px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-12 text-center text-4xl font-bold">Get in Touch</h1>

        <div className="rounded-xl bg-gray-800/50 p-8 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Side - Map and Contact Info */}
            <div className="space-y-6 rounded-2xl p-5">
              {/* Map */}
              {/* <div className="w-full h-48 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.1843746008244!2d87.30795617474978!3d22.314932342365967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d440255555547%3A0x6f2f20dd0c0d6793!2sIndian%20Institute%20of%20Technology%2C%20Kharagpur!5e1!3m2!1sen!2sin!4v1735563792276!5m2!1sen!2sin"
                  width="80%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14771.543822596173!2d87.31053100000001!3d22.314927000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d440255555547%3A0x6f2f20dd0c0d6793!2sIndian%20Institute%20of%20Technology%2C%20Kharagpur!5e0!3m2!1sen!2sin!4v1735566943047!5m2!1sen!2sin"
                width="70%"
                height="60%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span>📞</span>
                  <span>+91 12345 67890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>✉️</span>
                  <span>dev.soc@gmail.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/devsoc.iitkgp/"
                  className="rounded-md bg-gray-700 p-2 transition hover:bg-gray-600"
                >
                  <span>Instagram</span>
                </Link>
                <span></span>
                <Link
                  href="https://www.linkedin.com/company/devsoc-iitkgp/posts/?feedView=all"
                  className="rounded-md bg-gray-700 p-2 transition hover:bg-gray-600"
                >
                  <span>LinkedIn</span>
                </Link>
              </div>
              <div>
                <Link
                  href="https://www.facebook.com/devsoc.iitkgp/ "
                  className="rounded-md bg-gray-700 p-2 transition hover:bg-gray-600"
                >
                  <span>Facebook</span>
                </Link>
                <span></span>
                <Link
                  href="https://github.com/devsoc-iitkgp"
                  className="rounded-md bg-gray-700 p-2 transition hover:bg-gray-600"
                >
                  <span>GitHub</span>
                </Link>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mt-4 flex gap-10">
                <ul className="space-x-2">
                  {/* <span> Your Name</span> */}
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-md border border-gray-600 bg-transparent p-3 focus:border-gray-400 focus:outline-none"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </ul>
                <ul className="space-x-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md border border-gray-600 bg-transparent p-3 focus:border-gray-400 focus:outline-none"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </ul>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-md border border-gray-600 bg-transparent p-3 focus:border-gray-400 focus:outline-none"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>
              <div className="relative mx-auto w-full max-w-sm">
                <label
                  htmlFor="message"
                  className="bg-transparent px-1 text-sm text-white"
                >
                  Message
                </label>
                <input
                  type="text"
                  placeholder="Write your message.."
                  className="w-full border-b border-gray-400 bg-transparent text-white placeholder-gray-400 transition-colors focus:border-white focus:outline-none"
                />
              </div>
              {/* <div>
                <textarea
                  placeholder="Write your message..."
                  rows={4}
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-gray-400"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div> */}
              <button
                type="submit"
                className="flex items-center space-x-2 rounded-md border border-white bg-transparent px-6 py-3 transition"
              >
                <span>Send message</span>
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
