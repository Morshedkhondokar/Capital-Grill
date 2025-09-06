import React from "react";

const ContactForm = () => {
  return (
   <div className="my-16 px-3">
     <div className="max-w-2xl mx-auto bg-[#181818] text-white py-8 px-5 md:px-8 rounded-2xl shadow-lg">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-red-500 mb-3 heading-font tracking-widest">
        Get in Touch
      </h2>
      <p className="text-sm text-yellow-300 text-center mb-8">
        We’d love to hear your feedback! If you have any questions, feel free to ask.
      </p>

      {/* Form */}
      <form onSubmit={(e)=> {
        e.preventDefault()
        e.target.reset()
      }} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2">Your Name</label>
          <input
            type="text"
            required
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">Your Email</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-2">Your Message</label>
          <textarea
            rows="5"
            required
            placeholder="Write your message here..."
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </div>
   </div>
  );
};

export default ContactForm;
