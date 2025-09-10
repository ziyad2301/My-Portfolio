// src/sections/About.jsx

import React from 'react';
import { motion } from 'framer-motion';

// A reusable component for skill badges
const SkillBadge = ({ children }) => (
  <span className="bg-gray-800 text-gray-300 text-sm font-medium me-2 px-2.5 py-1 rounded-full">
    {children}
  </span>
);

const About = () => {
  return (
    // We'll adjust the padding here to reduce the gap
    <section id="about" className="py-20 md:py-24 bg-dark-slate">
      <div className="container mx-auto px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Discover the story behind the code—my journey, my philosophy, and my skills.
          </p>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-lg">
                {/* --- IMAGE PATH UPDATED BELOW --- */}
                <img
                  src="/assets/my-img.jpg" // This path points to public/assets/my-img.jpg
                  alt="Your Name - Professional Headshot"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div 
              className="md:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Bridging Engineering and Digital Artistry
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                My path to software development was a deliberate pivot, born from a background in Electronics & Communication Engineering and a fascination with the digital world. This unique foundation gives me a systems-level perspective, allowing me to build robust applications where every component works in perfect harmony.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                I am driven by the thrill of crafting interfaces that are not just functional, but beautiful enough to elicit a "wow." For me, that's the ultimate measure of success. Yet, my passion doesn't end at the UI; I thrive on dissecting complex logical challenges and architecting powerful backend solutions. It's this love for both form and function that fuels my work, including a talent for meticulously deconstructing and recreating sophisticated web experiences.
              </p>
               <p className="text-gray-400 leading-relaxed mb-8">
                As a perpetual learner, I am committed to mastering the ever-evolving landscape of technology. This drive ensures I can adapt to any challenge and deliver exceptional value, whether building a product from scratch or enhancing an existing service. Currently, I'm channeling this energy into a collaborative project with friends, aiming to bring our shared vision to the world.
              </p>

              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Core Technologies:</h4>
                <div className="flex flex-wrap gap-y-2">
                  <SkillBadge>React</SkillBadge>
                  <SkillBadge>Vue.js</SkillBadge>
                  <SkillBadge>Django</SkillBadge>
                  <SkillBadge>FastAPI</SkillBadge>
                  <SkillBadge>Ionic Vue</SkillBadge>
                  <SkillBadge>Tailwind CSS</SkillBadge>
                  <SkillBadge>REST APIs</SkillBadge>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

