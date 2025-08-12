import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="sticky top-[27px] z-50 bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#1A1A1A] h-[55px] flex items-center">
       <div className="w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-[#0A0A0A] border-width: 1px border-[#1A1A1A]">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={62}
                  height={62}
                />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            {/* Platform with dropdown */}
            <div className="flex items-center space-x-1 text-gray-400 hover:text-white cursor-pointer transition-colors">
              <span className="text-base font-medium text-[#828282] text-lg hover:text-white">Platform</span>
              <svg className="text-[#828282]" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Projects */}
            <span className="text-[#828282] text-lg font-medium hover:text-white cursor-pointer transition-colors">
              Projects
            </span>

            {/* Courses */}
            <span className="text-lg text-[#828282] font-medium hover:text-white cursor-pointer transition-colors">
              Courses
            </span>

            {/* Combo pack */}
            <span className="text-lg text-[#828282] font-medium hover:text-white cursor-pointer transition-colors">
              Combo pack
            </span>

            {/* Pricing */}
            <span className="text-lg text-[#828282] font-medium hover:text-white cursor-pointer transition-colors">
              Pricing
            </span>

            {/* Resources with dropdown */}
            <div className="flex items-center space-x-1 hover:text-white cursor-pointer transition-colors">
              <span className="text-lg text-[#828282] font-medium">Resources</span>
              <svg className="text-[#828282]" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Login Button */}
          <div className="flex items-center">
            <button 
              className="bg-[#0050FF] hover:bg-[#0040CC] text-white text-xl font-medium h-[55px] transition-colors duration-200 px-11"
            >
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-400 hover:text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;