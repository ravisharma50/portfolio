import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/img.jpg';

const Hero = () => {

    // Function to handle smooth scrolling
     const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };



  return (
   <section id="home" className="min-h-screen flex items-center pt-20">
               <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
                 <motion.div 
                   initial={{ opacity: 0, x: -50 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.7 }}
                   className="md:w-1/2 mb-10 md:mb-0"
                 >
                   <h1 className="text-4xl md:text-5xl font-bold mb-4">
                     Hi, I'm <span className="text-blue-600 dark:text-blue-400">Ravi Ranjan Kumar Sharma</span>
                   </h1>
                   <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
                     Frontend Developer
                   </h2>
                   <p className="text-lg mb-8">
                     Passionate about creating innovative solutions through code. Currently completed my Bachelor's in Electrical & Computer Engineering with a focus on full-stack development and machine learning.
                   </p>
                   <div className="flex space-x-4">
                     <motion.button
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       onClick={() => scrollToSection('projects')}
                       className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                     >
                       View Projects
                     </motion.button>
                     <motion.button
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       onClick={() => scrollToSection('contact')}
                       className="bg-emerald-500 border border-gray-600 dark:border-gray-600 text-gr-900 dark:text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                     >
                       Contact Me
                     </motion.button>
                   </div>
                 </motion.div>
                 
                 <motion.div 
                   initial={{ opacity: 0, x: 50 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.7, delay: 0.2 }}
                   className="md:w-1/2 flex justify-center"
                 >
                   <div className="relative">
                     <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center overflow-hidden">
                       <img 
                         src= {img1} 
                         alt="Profile portrait of a developer in a professional setting" 
                         className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover"
                       />
                     </div>
                   </div>
                 </motion.div>
               </div>
             </section>
  );
};

export default Hero;
