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
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projets</a>
        <a href="#testimonials">Resume</a>
      </div>
      <button className="poppins border-2 p-2 w-28 rounded-full border-green-500 hover:bg-green-500 hover:text-white">Contact</button>
    </nav>
  );
};