import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const timelineData = [
  {
    year: "Sept 2024 - Oct 2024",
    title: "Zenforge Developer Community",
    role: "Open Source Developer",
    description:
      "Created and implemented Jest unit and integration tests for backend API endpoints to ensure stability and early bug identification. Focusing on key features and edge cases increased test coverage.",
  },
  {
    year: "May 2024 - July 2024",
    title: "Bonjour Inde Voyage",
    role: "Full Stack Developer",
    description:
      "Helped create and implement secure phone OTP login systems using Firebase. Created and improved database schemas for easy data access and future expansion. Implemented server-side validation to protect sensitive data and assure data integrity, improving security.",
  },
  {
    year: "May 2023 - June 2023",
    title: "IIT Jodhpur",
    role: "Student Researcher",
    description:
      "Learned how GANs can turn a random latent coding into a realistic image. Defined latent code and discovered orthogonal subspaces for diverse picture properties.",
  },
  {
    year: "August 2021 - May 2025",
    title: "IIT Jodhpur",
    role: "Btech in Electrical Engineering",
    description:
      "Computer Architecture, Data Structures and Algorithm, Machine Learning, Advanced Computer vision, Signals and Systems",
  },
  {
    year: "July 2018 - May 2020",
    title: "Army Public School",
    role: "Higher Secondary Education",
    description:
      "Mathematics, Physics, Chemistry",
  },
];

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="dark:bg-slate-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-12 leading-normal text-fuchsia-500 uppercase text-center"
      >
        Experience
      </h1>
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 h-full w-1 bg-fuchsia-600 transform -translate-x-1/2"></div>

        <ul className="timeline flex flex-col gap-10">
          {timelineData.map((item, index) => (
            <li
              key={index}
              className={`relative flex flex-col items-center sm:flex-row ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
              {/* Timeline Content */}
              <div
                className={`timeline-content p-8 bg-slate-700 rounded-lg shadow-lg w-full sm:max-w-lg ${
                  index % 2 === 0 ? " text-right" : "text-left"
                }`}
              >
                <div className="flex flex-row items-center justify-between mb-2">
                  <h3 className="text-sm font-bold text-gray-100">{item.title}</h3>
                  <time className="block font-mono italic text-xs text-gray-400 ml-4">
                    {item.year}
                  </time>
                </div>
                
                <div className="block font-mono italic text-sm text-gray-100 text-left">
                  {item.role}
                </div>
                
                <p className="text-gray-200 mt-2 block text-left">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
