import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Chem Tutorials</h3>
            <p className="text-gray-400 mb-4">Expert Chemistry Tuition by Dr. Ayushi Singhal<br />PhD. Organic Chemistry</p>
            <div className="flex items-center space-x-4">
              <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-400">Sector 82, Gurugram - 122004</span>
            </div>
          </div>
          {/* Add other footer sections here */}
          <span>
            Website Designed by : <a href="https://www.linkedin.com/in/himanshu-mittal-9654b5221/" className="!text-yellow-500">Himanshu Mittal</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;