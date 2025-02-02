// import React from 'react';

// const Courses = () => {
//   return (
//     <section id="courses" className="py-20 bg-neutral-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeInUp">Our Courses</h2>
//           <p className="text-xl text-neutral-600 animate__animated animate__fadeInUp">Comprehensive Chemistry Programs for Various Levels</p>
//           <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {/* School Level */}
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
//             <div className="bg-yellow-500 h-2"></div>
//             <div className="p-8">
//               <div className="flex items-center justify-center h-16 w-16 bg-yellow-100 rounded-full mb-6 mx-auto">
//                 <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-center mb-4">Class 11th & 12th</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                   </svg>
//                   <span>Complete NCERT Syllabus</span>
//                   <svg className="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                   </svg>
//                   <span>Board Exam Preparation</span>
//                   <svg className="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                   </svg>
//                   <span>Competitive Exam Focus</span>
//                 </li>
//                 {/* Add other list items here */}
//               </ul>
//             </div>
//           </div>
//           {/* Add other course cards here */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Courses;



import React from 'react';

const CourseCard = ({ icon, title, features }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="h-2 bg-yellow-500"></div>
    <div className="p-6">
      <div className="w-16 h-16 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Courses = () => {
  const coursesData = [
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="none">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Class 11th & 12th",
      features: [
        "Complete NCERT Syllabus",
        "Board Exam Preparation",
        "Competitive Exam Focus"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="none">
          <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "BSc Chemistry",
      features: [
        "Organic Chemistry",
        "Inorganic Chemistry",
        "Physical Chemistry"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="none">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "B.Tech Chemistry",
      features: [
        "Engineering Chemistry",
        "Applied Chemistry",
        "Industrial Chemistry"
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-lg text-gray-600 mb-4">Comprehensive Chemistry Programs for Various Levels</p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-500 text-white px-8 py-3 rounded-full font-medium hover:bg-yellow-600 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;