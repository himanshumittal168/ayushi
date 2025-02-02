import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Dr. Singhal's teaching methodology is exceptional. Her approach to explaining complex concepts made organic chemistry much easier to understand. I scored 95% in my board exams!",
      name: "Priya Sharma",
      role: "Class 12 Student",
    },
    {
      id: 2,
      quote:
        "Thanks to ma'am's guidance, I cleared IIT-JAM with a good rank. Her notes and problem-solving sessions were incredibly helpful. The practice tests really prepared me well.",
      name: "Rahul Verma",
      role: "B.Sc Student",
    },
    {
      id: 3,
      quote:
        "The B.Tech chemistry course was made so much simpler with Dr. Singhal's teaching. Her real-world examples and practical approach helped me understand the concepts thoroughly.",
      name: "Arun Kumar",
      role: "B.Tech Student",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Student Testimonials
          </h2>
          <p className="text-xl text-neutral-600">What Our Students Say</p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition duration-300"
            >
              <div className="text-yellow-500 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L14.39 8.26L21 9.27L16.5 14.14L17.77 21L12 17.77L6.23 21L7.5 14.14L3 9.27L9.61 8.26L12 2z" />
                </svg>
              </div>
              <p className="text-neutral-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="flex-1">
                  <h4 className="font-bold text-neutral-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Ready to Excel in Chemistry?
            </h3>
            <p className="text-neutral-600 mb-6">
              Join our successful students and transform your chemistry learning
              experience
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition duration-300"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;