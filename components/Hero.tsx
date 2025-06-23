'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'

interface HeroProps {
  isLoadingComplete?: boolean
}

const Hero: React.FC<HeroProps> = ({ isLoadingComplete = true }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const titles = ['Full Stack Developer', 'Frontend Developer', 'Backend Developer']

  // Ensure animations trigger after loading is complete
  useEffect(() => {
    if (isLoadingComplete) {
      // Delay to ensure smooth transition after loading
      setTimeout(() => {
        setIsVisible(true)
      }, 300)
    }
  }, [isLoadingComplete])

  useEffect(() => {
    const currentTitle = titles[currentIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, displayText.length + 1))
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 100) // Faster deleting, slower typing

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, titles])

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 hidden lg:block">
        <div className="absolute top-10 left-10 w-96 h-96 bg-pink-300/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-300/15 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 "
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl text-primary-600 font-medium "
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 0.4 }}
            className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-bold gradient-text text-shadow"
          >
            Cîrstea Eduard
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 0.6 }}
            className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-700"
          >
            {displayText}
            <span className="text-primary-800 opacity-30 animate-pulse" style={{animationDirection: 'reverse'}}>|</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 0.8 }}
            className="text-xl sm:text-lg md:text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed px-4"
          >
            I build modern and interactive web applications using the latest technologies. 
            Specialized in React, Next.js, Node.js and many others to bring ideas to life.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 1 }}
            className="flex justify-center space-x-4 sm:space-x-6 px-4"
          >
            {[
              { icon: Github, href: 'https://github.com/EduardCirstea', label: 'GitHub', external: true },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/eduard-cirstea-1ba2a022b/', label: 'LinkedIn', external: true },
              { icon: Mail, href: '#contact', label: 'Email', external: false },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.external ? '_blank' : '_self'}
                rel={social.external ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 glass-effect rounded-2xl hover-glow group transition-all duration-150"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-primary-600 group-hover:text-accent-600 transition-colors duration-150" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 px-4"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              onClick={scrollToProjects}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-2xl font-semibold text-base sm:text-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>View Projects</span>
              <ArrowDown className="w-5 h-5" />
            </motion.button>

            <motion.a
              href="/cv-portofoliu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 glass-effect rounded-2xl font-semibold text-base sm:text-lg transition-all duration-200 flex items-center justify-center space-x-2 text-primary-700 hover:bg-white/90"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 