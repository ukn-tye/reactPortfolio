import React from "react";
import { skills } from "../data";
import check from "../imgs/icons8-instagram-check-mark-96.png"

export default function Skills() {
    return (
        <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-700 mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-gray-600 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            These are my biggest focus pints in my career and the laguages/ frameworks 
            that I am most familiar with and have the best knowledge on.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-200 rounded flex p-4 h-full items-center">
               <img src={check} alt="green check mark" className="h-8" />      
               <span className="title-font font-medium text-gray-700 ml-3">{skill.skill}</span>    
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );

};