import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import 'animate.css/animate.css';
import { FaUserTie, FaCalendarAlt, FaCode, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
const Experience = () => {
  const experiences = [
   
   
    {
      company: 'Eskills - Get Skills',
      role: 'Frontend Developer',
      duration: 'October 2023 - Present',
      description: 'At ESkill, I am not just learning frontend development; I am crafting digital experiences that captivate and innovate. From pixel perfection to seamless interactivity, I am on a journey to transform ideas into visually stunning realities in the world of web development.',
      icon: <FaCode />,
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade"  >
    <div className=" w-full h-full animate__animated animate__fadeIn experience-container flex flex-col items-center justify-center">
      <h1 className="md:text-4xl text-xl font-extrabold mb-1 md:mb-8 text-indigo-600 text-center glow">Professional Experience</h1>
      <div className="grid gap-2 md:gap-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {experiences.map((experience , index) => (
          <div
            key={index}
            className={`relative contact-gredient md:p-6 p-2 rounded-lg shadow-lg border border-gray-400 transition-transform transform hover:scale-105 hover:shadow-2xl experience-card ${
              hoveredIndex === index ? 'z-10' : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center md:mb-4">
              {React.cloneElement(experience.icon, { className: 'text-white text-sm md:text-4xl' })}
              <h2 className="text-lg font-semibold text-white ml-4">{experience.company}</h2>
            </div>
            <div className="flex items-center md:mb-2">
              <FaUserTie className="md:text-lg text-xs mr-2 text-gray-500" />
              <p className="md:text-lg text-xs text-gray-100 mb-2">{experience.role}</p>
            </div>
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="md:text-lg text-xs mr-2 text-gray-500" />
              <p className="md:text-sm text-xs text-gray-200 mb-2">{experience.duration}</p>
            </div>
            <p className="text-gray-100 text-xs md:text-sm">{experience.description}</p>
          </div>
        ))}
      </div>

      {/* Explore Projects Button */}
      <div className="text-center mt-2 md:mt-8">
        <button className="bg-indigo-700 hover:bg-indigo-300 text-white hover:text-black font-semibold text-xs md:text-lg py-3 px-6 rounded-full shadow-md">
         <Link to={"/project"} className='flex items-center justify-around'>
         Explore Projects <IoIosArrowDown className='mx-2 md:text-2xl animate-ping' />
         </Link>
        </button>
      </div>
    </div>
  </CSSTransition>
  );
};

export default Experience;
