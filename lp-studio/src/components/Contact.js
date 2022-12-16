import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded-2xl shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-700 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-gray-400">
                97 fakers St. <br />
                fake place, HV 30005
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-700 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-gray-400 leading-relaxed" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">
                Lucas.polk04@gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray-700 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-gray-400">214-697-1904</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h1 className="text-gray-700 sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h1>
          <p className="leading-relaxed mb-5 text-gray-400">
            Leave your name, email, and a message to that we can keep in touch about potential
            job offers, or projects.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-700">
              Name
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              placeholder="Enter name..."
              className="w-full  rounded border border-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-base outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-700">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              placeholder="Enter Email..."
              name="email"
              className="w-full rounded border border-gray-400 focus:border-indigo-green-500 focus:ring-2 focus:ring-green-500 text-base outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Leave a message..."
              className="w-full rounded border border-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500 h-32 text-base outline-none text-gray-400 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}