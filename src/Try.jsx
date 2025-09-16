// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Hero from './components/Hero';
// import Skills from './components/skills';
// import Education from './components/Education';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import Projects from './components/Projects';

// export default function Portfolio() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [menuOpen, setMenuOpen] = useState(false);
// //   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
// //   const [formErrors, setFormErrors] = useState({});
// //   const [formSuccess, setFormSuccess] = useState('');
  
//   // Intersection Observer for section highlighting
//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.5
//     };
// //     useEffect(() => {
// //     if (darkMode) {
// //       document.documentElement.classList.add("dark");
// //     } else {
// //       document.documentElement.classList.remove("dark");
// //     }
// //   }, [darkMode]);
    
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     }, observerOptions);
    
//     // Observe all sections
//     const sections = document.querySelectorAll('section');
//     sections.forEach((section) => observer.observe(section));
    
//     return () => {
//       sections.forEach((section) => observer.unobserve(section));
//     };
//   }, []);
  
//   // Project data
 
  

  

  
//   // Toggle dark mode
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };
  
//   // Scroll to section
//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//       setActiveSection(sectionId);
//       setMenuOpen(false);
//     }
//   };
  

  

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
//         {/* Navigation */}
//         {/* <Navbar/> */}
//         <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md z-50 py-4 shadow-sm">
//           <div className="container mx-auto px-4 flex justify-between items-center">
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="text-2xl font-bold"
//             >
//               Portfolio
//             </motion.div>
            
//             {/* Desktop Navigation */}
//             <div className="hidden md:flex space-x-8">
//               {['home', 'projects', 'skills', 'experience', 'contact'].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item)}
//                   className={`capitalize transition-colors ${
//                     activeSection === item
//                       ? 'text-blue-600 dark:text-blue-400 font-medium'
//                       : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
            
//             {/* Mobile Menu Button */}
//             <button 
//               className="md:hidden p-2"
//               onClick={() => setMenuOpen(!menuOpen)}
//               aria-label="Toggle menu"
//             >
//               <div className="w-6 h-0.5 bg-gray-800 dark:bg-white mb-1.5"></div>
//               <div className="w-6 h-0.5 bg-gray-800 dark:bg-white mb-1.5"></div>
//               <div className="w-6 h-0.5 bg-gray-800 dark:bg-white"></div>
//             </button>
            
//             {/* Dark Mode Toggle */}
//             <button
//               onClick={toggleDarkMode}
//               className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
//               aria-label="Toggle dark mode"
//             >
//               {darkMode ? (
//                 <span className="text-yellow-400">☀️</span>
//               ) : (
//                 <span className="text-gray-600">🌙</span>
//               )}
//             </button>
//           </div>
          
//           {/* Mobile Navigation */}
//           <AnimatePresence>
//             {menuOpen && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
//               >
//                 <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
//                   {['home', 'projects', 'skills', 'experience', 'contact'].map((item) => (
//                     <button
//                       key={item}
//                       onClick={() => scrollToSection(item)}
//                       className={`capitalize py-2 text-left ${
//                         activeSection === item
//                           ? 'text-blue-600 dark:text-blue-400 font-medium'
//                           : 'text-gray-600 dark:text-gray-300'
//                       }`}
//                     >
//                       {item}
//                     </button>
//                   ))}
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </nav>

//        <Navbar/>
//         <main>
//            {/* <Navbar/> */}

           
           
//           {/* Hero Section */}
//           <Hero/>

//           {/* Projects Section */}
//           <Projects/>
          

//           {/* Skills Section */}

//           <Skills/>
        

//           {/* Experience & Education Section */}
//           <Education/>
          

//           {/* Contact Section */}

//           <Contact/>
          
//         </main>
//         <Footer/>
        
//       </div>
//     </div>
//   );
// }