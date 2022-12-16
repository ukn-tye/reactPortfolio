

export default function About() {
    return (
        <section id="about" className="hero-image">
          <div className="container mx-auto flex px-10  md:flex-row flex-col items-center py-56">
            <div className="lg:flex-grow md:w-1/2  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items- text-center">
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium">
                Hi Im,
                <br className="hidden lg:inline-block" />Lucas Tyler Polk
                
              </h1>
              <p className="mb-8 leading-relaxed poppins-300 text-gray-70 w-3/6">
                I specialize in Web Development, Graphic Design, and UX/UI Design. 
                Learning new technologies, and skills to add to my workflow are things that I enjoy very much.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 light-shadow rounded-full text-lg">
                  Hire Me
                </a>
                <a
                  href="https://www.canva.com/design/DAE3t-0XuL8/IeLnJjkQHB8wzT-F2vTtLQ/edit"
                  className="ml-4 inline-flex text-gray-400 border-gray-400 border-2 py-2 px-6 hover:text-white hover:bg-gray-600 hover:border-gray-600 rounded-full text-lg">
                  Resume
                </a>
              </div>
            </div>
          </div>
        </section>
    );
};