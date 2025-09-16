import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3','Tailwind CSS'],
  },
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'JavaScript','C language', 'SQL'],
  },
  {
    category: 'Development Tools or Technologies',
    skills: ['Git & GitHub','Tailwind CSS', 'Boostrap','VS Code','IntelliJ IDEA'],
  },
  {
    category: 'Soft Skills',
    skills: ['Problem Solving', 'Team Leadership', 'Communication'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
      
      {/* container to center cards and limit width */}
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {skillsData.map(({ category, skills }) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-lg flex flex-col h-72 hover:shadow-2xl transition"
          >
            {/* Category Header */}
            <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-slate-100">
              {category}
            </h3>

            {/* Skills List with arrows */}
            <ul className="space-y-3">
              {skills.map((name) => (
                <li
                  key={name}
                  className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                >
                  <span className="text-blue-600 font-bold">➤</span>
                  {name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
