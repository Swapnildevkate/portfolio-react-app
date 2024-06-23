import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('All fields are required!');
      return;
    }
    // If all fields are filled, submit the form
    e.target.submit();
  };

  return (
    <div name="Contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white pt-28 ">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300 text-white">
            Contact
          </p>
          <p className="py-6 text-gray-100">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/0bbcfd24-82e7-4a06-b9e3-be412b59d225"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 bg-transparent border-2 rounded-md  text-white focus:outline-none border-gray-200 font-medium"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="my-4 p-2 bg-transparent border-2 rounded-md  text-white font-medium focus:outline-none border-gray-200"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none border-gray-200 font-medium"
            ></textarea>

            <button className="text-black text-xl font-medium bg-gradient-to- bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
