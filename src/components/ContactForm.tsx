"use client";
import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col justify-around gap-4 py-16 lg:w-[45%]"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
        <input
          type="text"
          placeholder="Your Name"
          className="text-md w-full rounded-md border-b border-gray-600 bg-transparent p-3 text-white placeholder-gray-400 focus:border-gray-400 focus:outline-none"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="text-md w-full rounded-md border-b border-gray-600 bg-transparent p-3 text-white placeholder-gray-400 focus:border-gray-400 focus:outline-none"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <input
        type="text"
        placeholder="Subject"
        className="text-md w-full rounded-md border-b border-gray-600 bg-transparent p-3 text-white placeholder-gray-400 focus:border-gray-400 focus:outline-none"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
      />

      <textarea
        rows={6}
        className="mt-10 w-full rounded-md border border-gray-400 bg-transparent p-3 text-sm text-white placeholder-gray-400 focus:border-gray-500 focus:outline-none"
        placeholder="Write your message..."
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <button
        type="submit"
        className="mt-10 rounded-md border border-white bg-black bg-opacity-20 px-4 py-3 text-sm text-white transition-all duration-300 hover:bg-black hover:bg-opacity-40"
      >
        Send Message →
      </button>
    </form>
  );
}

export default Form;
