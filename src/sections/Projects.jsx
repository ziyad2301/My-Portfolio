// src/sections/Projects.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants';

const SkillBadge = ({ children }) => (
  <span className="bg-gray-800 text-primary/80 text-xs font-medium me-2 px-2.5 py-1 rounded-full">
    {children}
  </span>
);

const ProjectCard = ({ project, isLast, totalProjects }) => {
  const isLoneLastCard = isLast && totalProjects % 3 === 1;

  const CardContent = () => (
    <>
      {/* --- HEIGHT INCREASED HERE --- */}
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500" 
      />
      
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
      </div>

      <div className="absolute inset-0 bg-black/70 flex flex-col p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        {/* Removed overflow-auto from the description paragraph */}
        <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => <SkillBadge key={i}>{tag}</SkillBadge>)}
        </div>
      </div>
    </>
  );

  const motionProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5 },
    className: `relative group overflow-hidden rounded-lg bg-gray-900/50 shadow-lg border border-gray-800/50 block
                ${isLoneLastCard ? 'lg:col-start-2' : ''}`
  };

  if (project.live_link) {
    return (
      <motion.a
        href={project.live_link}
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
        className={`${motionProps.className} cursor-pointer`}
      >
        <CardContent />
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps}>
      <CardContent />
    </motion.div>
  );
};


const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20 bg-dark-slate">
      <div className="container mx-auto px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            My <span className="text-primary">Creations</span>
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            A selection of projects that showcases my passion for building robust and beautiful web applications.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project}
              isLast={index === projects.length - 1}
              totalProjects={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
