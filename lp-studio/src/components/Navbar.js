import React from "react";
import blackLogo from "../imgs/black-lp-logo.png";

export default function Navbar() {
  return (
    <nav className="mt-12 ml-20 mr-20 flex justify-between items-center">
      <div className="flex flex-row items-center justify-between w-28">
        <img src={blackLogo} alt="my personal logo" className="h-14"/>
        <h1 className="text-2xl">studio</h1>
      </div>
      <div className="flex items-center justify-between w-2/6 text-l poppins">
        <a href="#about" className="hover:text-green-500">About</a>
        <a href="#skills" className="hover:text-green-500">Skills</a>
        <a href="#projects" className="hover:text-green-500">Projets</a>
        <a href="https://www.canva.com/design/DAE3t-0XuL8/IeLnJjkQHB8wzT-F2vTtLQ/edit" className="hover:text-green-500">Resume</a>
      </div>
      <a
                  href="#contact"
                  className="inline-flex text-gray-700 border-green-500 border-2 py-2 px-6 focus:outline-none hover:bg-green-500 hover:text-white poppins rounded-full">
                  Contact
                </a>
    </nav>
  );
};