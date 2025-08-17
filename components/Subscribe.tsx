"use client";
import { useState } from "react";
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-inter',
});

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // TODO: Add your newsletter API integration (like Substack, Mailchimp, etc.)
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <div className="bg-black py-10">
      <div className="max-w-4xl mx-auto px-8 text-center">
        {/* Heading */}
        <h2 className={`${inter.className} text-[40px] font-medium leading-[56px] text-white mb-2`}>
          Subscribe to our newsletter
        </h2>
        <p className={`${inter.className} text-[#7A7A7A] text-[25px] leading-[30px] mb-8`}>
          Join 3,000+ readers
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${inter.className} rounded w-full max-w-2xl mx-auto bg-[#1A1A1A] text-[#CCCCCC] placeholder-[#7A7A7A] px-6 py-4 text-[16px] border border-[#333333] focus:border-white outline-none transition-colors`}
              required
            />
          </div>
          <button
            type="submit"
            className={`${inter.className} w-full max-w-2xl mx-auto bg-[#0050FF] hover:bg-[#0040CC] text-white py-4 text-[18px] font-medium transition-colors`}
          >
            Subscribe
          </button>
        </form>

        {/* Terms */}
        <p className={`${inter.className} text-[15px] text-[#828282] leading-[20px] max-w-lg mx-auto pb-40`}>
          By subscribing, I agree to Substack's{" "}
          <a href="#" className="text-[#7A7A7A] underline hover:text-[#CCCCCC] transition-colors">
            Terms of Use
          </a>{" "}
          and <br /> acknowledge its{" "}
          <a href="#" className="text-[#7A7A7A] underline hover:text-[#CCCCCC] transition-colors">
            Information Collection
          </a>{" "}
          Notice and{" "}
          <a href="#" className="text-[#7A7A7A] underline hover:text-[#CCCCCC] transition-colors">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
