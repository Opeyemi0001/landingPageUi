import { mylogo } from "../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex justify-between items-center py-4 px-5 md:px-10 fixed bg-[#04142B] z-10 text-white">
        <a href="#top">
          <img src={mylogo} alt="logo" className="h-8 md:h-10" />
        </a>

        
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0 md:space-x-10 text-sm absolute md:static top-16 left-0 w-full md:w-auto bg-[#04142B] md:bg-transparent p-5 md:p-0`}
        >
          <li>
            <a href="#model" className="hover:text-gray-300">
              Model
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-gray-300">
              Pricing
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#custom" className="hover:text-gray-300">
              Custom Models
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-3 justify-between items-center">
          <button className="border border-white px-5 py-2 rounded hover:bg-white hover:text-black">
            Login
          </button>
          <button className="border border-black text-black bg-white px-5 py-2 rounded hover:bg-gray-200">
            Get Started Now
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;