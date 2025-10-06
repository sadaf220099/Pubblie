import React, { useState } from "react";
import logo from "../assets/images/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo"  />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 lg:space-x-12 xl:space-x-16">
            <a href="#about" className="text-black hover:text-blue-500">
              About
            </a>
            <a href="#features" className="text-black hover:text-blue-500">
              Features
            </a>
            <a href="#how" className="text-black hover:text-blue-500">
              How it works
            </a>
            <a href="#contact" className="text-black hover:text-blue-500">
              Contact Us
            </a>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <h2 className="text-black text-sm lg:text-base xl:text-lg">
              Become a Creator
            </h2>
            <button className="!bg-black text-white rounded-full px-5 py-2 lg:px-6 xl:px-8 lg:py-2.5 shadow-lg">
              Log In as a brand
            </button>
            <button className="bg-blue-500 text-white rounded-full px-5 py-2 lg:px-6 xl:px-8 lg:py-2.5 shadow-lg">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-2 p-4">
            <li><a href="#about" className="text-black">About</a></li>
            <li><a href="#features" className="text-black">Features</a></li>
            <li><a href="#how" className="text-black">How it works</a></li>
            <li><a href="#contact" className="text-black">Contact Us</a></li>
          </ul>
          <div className="flex flex-col items-center space-y-2 p-4">
            <h2 className="text-black">Become a Creator</h2>
            <button className="bg-black text-white rounded-full px-5 py-2 shadow-lg w-full">
              Log In as a brand
            </button>
            <button className="bg-blue-500 text-white rounded-full px-5 py-2 shadow-lg w-full">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
