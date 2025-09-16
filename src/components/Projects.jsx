import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import img from '../assets/EMS.jpg';
import img1 from '../assets/NGG1.webp';


const projects = [
  {
    id: 1,
    title: "Employee management System",
    description: "Employee Management System is a web-based project that helps organizations manage employee records, assign tasks, and track performance efficiently.",
    technologies: ["React", "Tailwind css", "JavaScript", ],
    github: "https://github.com/ravisharma50/Employee-Management-System",
    // demo: "https://yourusername-chat-app.vercel.app",
    image: img
  },
  {
    id: 2,
    title: "Number Guessing Game",
    description: "The Number Guessing Game is a simple yet engaging console-based game where the player attempts to guess a randomly generated number within a specified range.",
    technologies: ["java", "OOPS Concept"],
    github: "https://github.com/ravisharma50/NumberGuessingGame",
    // demo: "https://yourname-ecommerce.vercel.app",
    image: img1
  },
 
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-muted max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ id, title, description, technologies, github, demo, image }) => (
          <motion.article
            key={id}
            className="bg-background rounded-xl shadow-lg overflow-hidden flex flex-col"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.12)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            tabIndex={0}
            aria-labelledby={`project-title-${id}`}
          >
            <img
              src={image}
              alt={`Screenshot of ${title} project`}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 id={`project-title-${id}`} className="text-xl font-semibold mb-3">
                {title}
              </h3>
              <p className="text-muted-foreground flex-grow">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block bg-primary/20 text-primary text-xs font-medium px-3 py-1 rounded-full select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex space-x-4">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                  aria-label={`View ${title} on GitHub`}
                >
                  <FaGithub aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                {/* <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                  aria-label={`View live demo of ${title}`}
                >
                  <FaExternalLinkAlt aria-hidden="true" />
                  <span>Live Demo</span>
                </a> */}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;