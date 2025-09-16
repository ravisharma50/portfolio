import React from 'react'
import { motion } from 'framer-motion'

const Education = () => {
  // Experience data
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Tech Solutions Inc.",
      period: "Jun 2023 - Present",
      description: "Developed responsive web applications and collaborated with the design team to implement UI components."
    },
    {
      role: "Web Developer",
      company: "Freelance",
      period: "Jan 2022 - May 2023",
      description: "Built custom websites for small businesses and optimized performance for better user experience."
    }
  ];
  
  // Education data
  const education = [
    {
      degree: "Bachelor of Electrical & Computer Engineer",
      institution: "Gandhi Institute for Education & Technology",
      period: "2021 - 2025",
      description: "Specialized in web development and software engineering principles."
    },
    {
      degree: "Senior Secondary Education (XII)",
      institution: "Laxmi Narayan Dubey college",
      period: "2018 - 2020",
      description: "Focused on science stream with major subjects in Physics, Chemistry, and Mathematics."
    },
    {
      degree: "Secondary Education (X)",
      institution: "Acme Public School",
      period: "2018",
      description: "Completed high school with a strong foundation in core subjects."
    }
  ];

  return (
    <section id="experience" className="py-20">
                  <div className="container mx-auto px-4">
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-3xl font-bold text-center mb-12"
                    >
                      Education
                    </motion.h2>
                    
                    <div className="flex flex-col items-center max-w-5xl mx-auto">
                      {/* Education */}
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="space-y-8">
                          {education.map((edu, index) => (
                            <div key={index} className="relative pl-8">
                              <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-green-600"></div>
                              <div className="absolute left-2 top-2 h-full w-0.5 bg-green-600"></div>
                              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                                <h4 className="text-xl font-bold">{edu.degree}</h4>
                                <p className="text-green-600 dark:text-green-400 mb-2">{edu.institution} • {edu.period}</p>
                                <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </section>
  )
}

export default Education
