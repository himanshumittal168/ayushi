import React from 'react';

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeInUp">Class Schedule</h2>
          <p className="text-xl text-neutral-600 animate__animated animate__fadeInUp">New Batches Starting Soon</p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* School Batches */}
          <div className="bg-neutral-50 rounded-xl p-8 shadow-lg animate__animated animate__fadeInLeft">
            <h3 className="text-2xl font-bold mb-6 text-neutral-900 flex items-center">
              <svg className="w-8 h-8 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Class 11th & 12th
            </h3>
            <div className="space-y-4">
              <div className="flex items-center bg-white p-4 rounded-lg">
                <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold">Morning Batch</p>
                  <p className="text-neutral-600">7:00 AM - 9:00 AM</p>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-lg">
                <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold">Evening Batch</p>
                  <p className="text-neutral-600">4:00 PM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* College Batches */}
          <div className="bg-neutral-50 rounded-xl p-8 shadow-lg animate__animated animate__fadeInRight">
            <h3 className="text-2xl font-bold mb-6 text-neutral-900 flex items-center">
              <svg className="w-8 h-8 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              BSc & B.Tech
            </h3>
            <div className="space-y-4">
              <div className="flex items-center bg-white p-4 rounded-lg">
                <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold">Weekend Batch</p>
                  <p className="text-neutral-600">Saturday: 10:00 AM - 1:00 PM</p>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-lg">
                <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold">Weekend Batch</p>
                  <p className="text-neutral-600">Sunday: 10:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-yellow-50 rounded-lg p-6 animate__animated animate__fadeInUp">
            <h4 className="text-lg font-bold text-neutral-900 mb-2">Special Note</h4>
            <p className="text-neutral-600">New batches starting soon. Limited seats available!</p>
            <a href="#contact" className="mt-4 inline-block px-6 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition duration-300">
              Reserve Your Seat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;