'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, Mail } from 'lucide-react'

interface NavigationProps {
  isLoadingComplete?: boolean
}

const Navigation: React.FC<NavigationProps> = ({ isLoadingComplete = true }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Show navigation after loading is complete
  useEffect(() => {
    if (isLoadingComplete) {
      // Delay to ensure smooth transition after loading
      setTimeout(() => {
        setIsVisible(true)
      }, 200)
    }
  }, [isLoadingComplete])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom px-6 sm:px-4">
        <div className="flex items-center justify-between">
          {/* Invisible spacer for mobile to center logo */}
          <div className="md:hidden w-10"></div>
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl sm:text-3xl font-bold gradient-text cursor-pointer flex-1 text-center md:flex-none md:text-left"
            onClick={() => scrollToSection('#home')}
          >
            &lt;Eduard/&gt;
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  y: isVisible ? 0 : -20 
                }}
                transition={{ delay: isVisible ? (index * 0.1 + 0.3) : 0 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-1 lg:space-x-2 text-gray-800 hover:text-accent-600 transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                <item.icon size={16} className="lg:w-[18px] lg:h-[18px]" />
                <span>{item.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary-700 hover:text-accent-600 transition-colors w-10 flex justify-center"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 glass-effect rounded-2xl p-4"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-3 w-full text-left p-3 text-primary-700 hover:text-accent-600 hover:bg-white/50 rounded-xl transition-all duration-200"
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.name}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation 