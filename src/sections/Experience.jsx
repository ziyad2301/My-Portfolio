// src/sections/Experience.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../constants';

const ExperienceCard = ({ experience, isLast }) => {
  return (
    <div className="flex">
      {/* Left side: Timeline line and icon */}
      <div className="flex flex-col items-center mr-6">
        {/* The icon circle */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-800 border-2 border-primary flex items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-full h-full object-contain p-2 rounded-full"
          />
        </div>
        {/* The connecting line - doesn't render for the last item */}
        {!isLast && (
          <div className="w-0.5 h-full bg-primary/30 mt-2"></div>
        )}
      </div>

      {/* Right side: The card content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pb-10"
      >
        <p className="text-sm text-gray-400 mb-1">{experience.date}</p>
        <h3 className="mb-1 font-bold text-white text-xl">{experience.title}</h3>
        <p className="text-md font-semibold leading-snug tracking-wide text-primary mb-3">
          {experience.company_name}
        </p>
        <ul className="list-disc text-left ml-5 space-y-1.5 text-sm text-gray-300">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-20 bg-dark-slate">
      <div className="container mx-auto px-4 md:px-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Work <span className="text-primary">Experience</span>
          </h2>
        </motion.div>

        {/* The timeline container */}
        <div>
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              experience={experience} 
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
