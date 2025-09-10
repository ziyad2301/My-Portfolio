// src/sections/Hero.jsx

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="flex items-center justify-center text-white">
      <div className="container mx-auto px-10 pt-40 md:pt-48 pb-16 md:pb-20">
        <div className="text-center md:text-left">
          <div className="absolute inset-0 top-[10%] left-[5%] max-w-xl h-[400px] bg-primary/20 blur-[120px] rounded-full -z-10"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
              Hi, I'm <span className="text-primary">Mohammed Ziyad</span>
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-300">
              I'm a{' '}
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer', 2000,
                  'React Specialist', 2000,
                  'Vue.js Artisan', 2000,
                  'Django Architect', 2000,
                  'FastAPI Developer', 2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-secondary"
                repeat={Infinity}
              />
            </h2>

            <p className="max-w-xl mx-auto md:mx-0 text-lg text-gray-400 mb-8">
              An engineer by training and a developer by passion, I build high-performance web applications that bridge the gap between elegant design and powerful backend logic.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6"
          >
            <a 
              href="#projects" 
              className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg 
                         hover:bg-violet-700 transition-transform duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a 
              href="/RESUME-ZIYAD.pdf"
              download
              className="bg-transparent border-2 border-primary text-primary font-bold py-3 px-8 rounded-full text-lg
                         hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
