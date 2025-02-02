// import React, { useState } from 'react';
// import './output.css'
// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav id="navbar" className="bg-neutral-900 fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <span className="text-2xl font-bold text-white">Chem Tutorials</span>
//             </div>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <a href="#hero" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
//               <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
//               <a href="#courses" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Courses</a>
//               <a href="#achievements" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Achievements</a>
//               <a href="#schedule" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Schedule</a>
//               <a href="#testimonials" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
//               <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               id="mobile-menu-button"
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-white"
//               onClick={toggleMobileMenu}
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-neutral-900`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <a href="#hero" className="text-red-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
//           <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
//           <a href="#courses" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Courses</a>
//           <a href="#achievements" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Achievements</a>
//           <a href="#schedule" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Schedule</a>
//           <a href="#testimonials" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
//           <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import './output.css'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav id="navbar" className="bg-gradient-to-r from-[#1e3a8a] to-[#312e81] fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">
                Chem Tutorials
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#hero" className="!text-white !font-bold hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Home</a>
              <a href="#about" className="!text-white !font-bold hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">About</a>
              <a href="#courses" className="!text-white !font-bold hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Courses</a>
              <a href="#achievements" className="!text-white !font-bold hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Achievements</a>
              <a href="#schedule" className="!text-white !font-bold hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Schedule</a>
              <a href="#testimonials" className="!text-white !font-bold hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Testimonials</a>
              <a href="#contact" className="!text-white !font-bold bg-blue-600 text-white hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">Contact</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              id="mobile-menu-button"
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-gradient-to-r from-[#1e3a8a] to-[#312e81]`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#hero" className="!text-white !font-bold hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Home</a>
          <a href="#about" className="!text-white !font-bold hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">About</a>
          <a href="#courses" className="!text-white !font-bold hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Courses</a>
          <a href="#achievements" className="!text-white !font-bold hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Achievements</a>
          <a href="#schedule" className="!text-white !font-bold hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Schedule</a>
          <a href="#testimonials" className="!text-white !font-bold hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Testimonials</a>
          <a href="#contact" className="!text-white !font-bold bg-blue-600 text-white hover:bg-blue-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;