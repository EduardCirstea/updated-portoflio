'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, Eye, CheckCircle, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import projectsData from '../../../data/projects.json'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find(p => p.id === params.id)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [toast, setToast] = useState<{ message: string } | null>(null)

  if (!project) {
    notFound()
  }

  const showToast = (message: string) => {
    setToast({ message })
    setTimeout(() => setToast(null), 4000)
  }

  const handleGithubClick = () => {
    if (!project.github || project.github.trim() === '') {
      showToast('This project is internal and the source code cannot be shared due to company policy.')
      return
    }
    window.open(project.github, '_blank')
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const lightboxSlides = project.photos?.map(photo => ({ src: photo })) || []

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-primary-50 to-primary-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect py-4">
        <div className="container-custom">
          <Link href="/#projects">
            <motion.button
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-primary-700 hover:text-accent-600 transition-colors font-medium"
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </motion.button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                {project.category}
              </span>
              <div className="flex items-center text-primary-600 text-sm">
                <Calendar size={16} className="mr-1" />
                {new Date(project.completedAt).toLocaleDateString('ro-RO', {
                  year: 'numeric',
                  month: 'long'
                })}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
              {project.title}
            </h1>

            <p className="text-lg md:text-xl text-primary-600 max-w-3xl mx-auto mb-8">
              {project.description}
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
              >
                <Eye className="w-5 h-5" />
                <span>View Demo</span>
              </motion.a>

              <motion.button
                onClick={handleGithubClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-effect rounded-2xl font-semibold text-lg hover-glow transition-all duration-300 flex items-center space-x-2 text-primary-700"
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <div className="glass-effect rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover max-h-[70vh]"
                priority
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 rounded-3xl flex items-center justify-center">
                <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 px-4 py-2 rounded-lg">
                  <span className="text-primary-800 font-medium">Click to view gallery</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-effect rounded-3xl p-8 mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-6">
                  About Project
                </h2>
                <div className="prose prose-lg text-primary-600 leading-relaxed">
                  <p>{project.longDescription}</p>
                </div>
              </motion.div>

              {/* Features Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-effect rounded-3xl p-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-6">
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {(project.features || []).map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary-700 rounded-full flex-shrink-0"></div>
                      <span className="text-primary-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="glass-effect rounded-3xl p-8"
              >
                <h3 className="text-xl font-bold text-primary-800 mb-6 flex items-center">
                  <Tag className="w-5 h-5 mr-2" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      className="px-4 py-2 bg-primary-100 text-primary-700 rounded-xl text-sm font-medium hover:bg-primary-200 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Project Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="glass-effect rounded-3xl p-8"
              >
                <h3 className="text-xl font-bold text-primary-800 mb-6">
                  Project Links
                </h3>
                <div className="space-y-4">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group"
                  >
                    <ExternalLink className="w-5 h-5 text-primary-600 group-hover:text-accent-600" />
                    <div>
                      <p className="font-medium text-primary-800">Live Demo</p>
                      <p className="text-sm text-primary-600">View the project</p>
                    </div>
                  </motion.a>

                  <motion.button
                    onClick={handleGithubClick}
                    whileHover={{ x: 5 }}
                    className="w-full flex items-center space-x-3 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group"
                  >
                    <Github className="w-5 h-5 text-primary-600 group-hover:text-accent-600" />
                    <div>
                      <p className="font-medium text-primary-800">Source Code</p>
                      <p className="text-sm text-primary-600">View on GitHub</p>
                    </div>
                  </motion.button>
                </div>
              </motion.div>


            </div>
          </div>

          {/* Image Gallery */}
          {project.photos && project.photos.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-8 text-center">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {project.photos.map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-effect rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer aspect-video"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={photo}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={lightboxIndex}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50, x: 50 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm"
          >
            <div className="glass-effect rounded-2xl p-4 shadow-2xl border border-blue-200 bg-blue-50/80">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 text-blue-600">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-800">
                    {toast.message}
                  </p>
                </div>
                <button
                  onClick={() => setToast(null)}
                  className="flex-shrink-0 text-blue-400 hover:text-blue-600 transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
} 