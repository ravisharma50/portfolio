import React from 'react';
import Hero from './components/Hero';
import Skills from './components/skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/about';

const App = () => {
  return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <main>
           
       <Navbar/>
          <Hero/>
          <About/>
          <Projects/>
          <Skills/>
          <Education/>
          <Contact/>
        </main>
        <Footer/>  
      </div>
  );
}
export default App;