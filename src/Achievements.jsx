import React from 'react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeInUp">Academic Excellence</h2>
          <p className="text-xl text-gray-300 animate__animated animate__fadeInUp">Proven Track Record of Success</p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Professional Achievement */}
          <div className="bg-neutral-800 rounded-lg p-6 transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
            <div className="flex items-center justify-center h-16 w-16 bg-yellow-500 rounded-full mb-6 mx-auto">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">DTU Faculty</h3>
            <p className="text-gray-300 text-center">Chemistry Lecturer at Delhi Technological University</p>
          </div>

          {/* IIT-JAM */}
          <div className="bg-neutral-800 rounded-lg p-6 transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center h-16 w-16 bg-yellow-500 rounded-full mb-6 mx-auto">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">IIT-JAM</h3>
            <p className="text-gray-300 text-center">Qualified with Distinguished Score</p>
          </div>

          {/* NET-JRF */}
          <div className="bg-neutral-800 rounded-lg p-6 transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center h-16 w-16 bg-yellow-500 rounded-full mb-6 mx-auto">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">NET-JRF</h3>
            <p className="text-gray-300 text-center">National Eligibility Test with JRF</p>
          </div>

          {/* GATE */}
          <div className="bg-neutral-800 rounded-lg p-6 transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-center h-16 w-16 bg-yellow-500 rounded-full mb-6 mx-auto">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">GATE</h3>
            <p className="text-gray-300 text-center">Graduate Aptitude Test in Engineering Qualified</p>
          </div>
        </div>

        <div className="mt-16 bg-neutral-800 rounded-lg p-8 animate__animated animate__fadeInUp">
          <h3 className="text-2xl font-bold text-center mb-6">Academic Background</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-yellow-500 text-4xl font-bold mb-2">PhD</div>
              <p className="text-gray-300">Organic Chemistry</p>
            </div>
            <div className="text-center">
              <div className="text-yellow-500 text-4xl font-bold mb-2">10+ Years</div>
              <p className="text-gray-300">Teaching Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;