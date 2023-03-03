import React from "react";
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="/">
          <img src={logo} alt="" />
          <span className="ml-3 text-xl">Keep</span>
        </a>
        <nav className="md:ml-auto flex flex-1 flex-wrap items-center text-base justify-center px-10">
          <input type="text" className="bg-slate-800  text-white w-full px-5 py-3 border-none placeholder:text-slate-600" placeholder="Search"/>
        </nav>
        <button className="inline-flex items-center bg-gray-800 border-0 py-3 px-5 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Search
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
