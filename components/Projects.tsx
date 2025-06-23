'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Filter, CheckCircle, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import projectsData from '../data/projects.json'

const Projects = () => {
  const [filter, setFilter] = useState('All')
  const [key, setKey] = useState(0)
  const [toast, setToast] = useState<{ message: string } | null>(null)
  const categories = ['All', 'Full Stack', 'Frontend', 'Backend']

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter)

  const featuredProjects = projectsData.filter(project => project.featured)

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter)
    setKey(prev => prev + 1) // Force re-animation
  }

  const showToast = (message: string) => {
    setToast({ message })
    setTimeout(() => setToast(null), 4000)
  }

  const handleGithubClick = (e: React.MouseEvent, githubUrl: string) => {
    e.preventDefault()
    e.stopPropagation()
    if (!githubUrl || githubUrl.trim() === '') {
      showToast('This project is internal and the source code cannot be shared due to company policy.')
      return
    }
    window.open(githubUrl, '_blank')
  }

  return (
    <section id="projects" className="section-padding bg-primary-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            My Projects
          </h2>
          <p className="text-lg md:text-xl text-primary-600 max-w-3xl mx-auto">
            A collection of projects that demonstrate my skills in full stack development. 
            Each project is built with attention to detail and best practices.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 hidden lg:block"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-effect rounded-3xl overflow-hidden hover-glow transition-all duration-300 h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <div className="flex space-x-2">
                        <button
                          onClick={(e) => handleGithubClick(e, project.github)}
                          className="p-2 text-primary-600 hover:text-accent-600 transition-colors"
                        >
                          <Github size={18} />
                        </button>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-primary-600 hover:text-accent-600 transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-primary-800 mb-2 min-h-[3.5rem] line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-primary-600 mb-4 line-clamp-2 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-100 text-primary-700 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-lg text-sm">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <Link href={`/projects/${project.id}`} className="mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        View Details
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-12 px-4"
        >
          <div className="glass-effect rounded-2xl p-2 flex flex-wrap justify-center gap-2 sm:gap-0 sm:space-x-2">
            <Filter className="w-5 h-5 text-primary-600 m-2 hidden sm:block" />
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFilterChange(category)}
                className={`px-3 sm:px-6 py-2 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                  filter === category
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                    : 'text-primary-600 hover:bg-white/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="contents"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.08,
                    ease: "easeOut" 
                  }}
                  className="group"
                >
               <div className="glass-effect rounded-3xl overflow-hidden hover-glow transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                                 
                 <div className="p-6 flex flex-col flex-1">
                   <div className="flex items-center justify-between mb-3">
                     <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                       {project.category}
                     </span>
                     <div className="flex space-x-2">
                       <button
                         onClick={(e) => handleGithubClick(e, project.github)}
                         className="p-1 text-primary-600 hover:text-accent-600 transition-colors"
                       >
                         <Github size={16} />
                       </button>
                       <a
                         href={project.demo}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="p-1 text-primary-600 hover:text-accent-600 transition-colors"
                       >
                         <ExternalLink size={16} />
                       </a>
                     </div>
                   </div>
                   <div className="flex flex-wrap gap-1 mb-4">
                     {project.technologies.slice(0, 2).map((tech) => (
                       <span
                         key={tech}
                         className="px-2 py-1 bg-primary-100 text-primary-700 rounded-lg text-xs"
                       >
                         {tech}
                       </span>
                     ))}
                     {project.technologies.length > 2 && (
                       <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-lg text-xs">
                         +{project.technologies.length - 2}
                       </span>
                     )}
                   </div>
                   <h3 className="text-lg font-bold text-primary-800 mb-2">
                     {project.title}
                   </h3>
                   
                   <p className="text-primary-600 mb-4 text-sm line-clamp-2">
                     {project.description}
                   </p>
                   
                
                   
                   <Link href={`/projects/${project.id}`} className="mt-auto">
                     <motion.button
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       className="w-full py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300"
                     >
                       View Details
                     </motion.button>
                   </Link>
                 </div>
              </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 max-w-md mx-4"
          >
            <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl p-4 flex items-center space-x-3">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 font-medium text-sm">
                  {toast.message}
                </p>
              </div>
              <button
                onClick={() => setToast(null)}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects 