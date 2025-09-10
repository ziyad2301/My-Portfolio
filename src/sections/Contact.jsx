// src/sections/Contact.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi'; // A nice email icon

const Contact = () => {
  const yourEmail = "ziyad.szakeer@gmail.com"; // <-- REPLACE WITH YOUR ACTUAL EMAIL

  return (
    <section id="contact" className="py-16 md:py-20 bg-dark-slate">
      <div className="container mx-auto px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            I'm currently available for freelance opportunities and open to discussing new projects.
            Feel free to reach out—my inbox is always open!
          </p>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center gap-4 mb-8">
            <FiMail className="text-primary" size={30} />
            <p className="text-2xl font-semibold text-white tracking-wider">
              {yourEmail}
            </p>
          </div>
          
          <a 
            href={`mailto:${yourEmail}`}
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full text-lg 
                       hover:bg-violet-700 transition-all duration-300 transform hover:scale-105"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
