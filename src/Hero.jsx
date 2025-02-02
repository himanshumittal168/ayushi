import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-neutral-900 min-h-[70vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-800/90"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate__animated animate__fadeInDown">
            Excel in Chemistry<br />
            <span className="text-yellow-400">with Expert Guidance</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate__animated animate__fadeInUp">
            Professional Chemistry tuition for 11th, 12th & Undergraduate courses<br />
            by Dr. Ayushi Singhal (IIT-JAM, NET-JRF, GATE qualified)
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 animate__animated animate__fadeInUp">
            <a href="#courses" className="inline-block px-8 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition duration-300">
              Explore Courses
            </a>
            <a href="#contact" className="inline-block px-8 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold rounded-full hover:bg-yellow-500 hover:text-black transition duration-300">
              Contact Now
            </a>
          </div>
        </div>
        <div className="mt-8 text-gray-300 animate__animated animate__fadeInUp">
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>Sector 82, Gurugram</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>New Batches Starting Soon</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
              <span>DTU Faculty Member</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-neutral-900 to-transparent"></div>
    </section>
  );
};

export default Hero;