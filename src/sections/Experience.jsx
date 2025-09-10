// src/sections/Experience.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../constants'; // We'll still use our data file

const ExperienceCard = ({ experience, index }) => {
  return (
    <div className="relative flex justify-between items-center w-full mb-8">
      {/* Left or Right alignment based on index */}
      <div className={`order-1 w-5/12 ${index % 2 === 0 ? 'text-right' : ''}`}></div>

      {/* Center line and dot */}
      <div className="z-10 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
        <div className="mx-auto text-white font-semibold text-lg">
          <img src={experience.icon} alt={experience.company_name} className="p-1 rounded-full" />
        </div>
      </div>

      {/* Experience Details Card */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className={`order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 bg-gray-900/50 border border-gray-800/50
                    ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
      >
        <p className={`text-sm ${index % 2 === 0 ? 'text-right' : 'text-left'} text-gray-400`}>{experience.date}</p>
        <h3 className="mb-2 font-bold text-white text-xl">{experience.title}</h3>
        <p className="text-md font-semibold leading-snug tracking-wide text-primary mb-3">
          {experience.company_name}
        </p>
        <ul className="list-disc text-left ml-5 space-y-2">
            {experience.points.map((point, i) => (
                <li key={i} className="text-gray-300 text-sm">{point}</li>
            ))}
        </ul>
      </motion.div>
    </div>
  );
};


const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-20 bg-dark-slate">
      <div className="container mx-auto px-10">
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

        {/* The timeline container with the vertical line */}
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="absolute border-2-2 border-primary/30 h-full border" style={{left: '50%'}}></div>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
