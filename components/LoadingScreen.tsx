'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setIsComplete(true)
          setTimeout(onComplete, 500)
          return 100
        }
        // Ensure we don't exceed 100%
        const increment = Math.random() * 8 + 3
        return Math.min(prev + increment, 100)
      })
    }, 150)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-primary-50 to-primary-100"
        >
          {/* Background Animation */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-rose-300/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-300/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
          </div>

          <div className="text-center space-y-8">
            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl md:text-3xl text-primary-700 font-semibold"
              >
                Se încarcă portofoliul...
              </motion.p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="w-80 max-w-sm mx-auto space-y-4"
            >
              <div className="glass-effect rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              
              {/* Loading Text */}
              <div className="flex items-center justify-center space-x-2 text-primary-600">
                <span className="text-sm font-medium">Loading</span>
                <div className="loading-dots flex space-x-1">
                  <span className="w-1 h-1 bg-primary-500 rounded-full animate-pulse" style={{animation: 'loadingDots 1.4s infinite'}}></span>
                  <span className="w-1 h-1 bg-primary-500 rounded-full animate-pulse" style={{animation: 'loadingDots 1.4s infinite'}}></span>
                  <span className="w-1 h-1 bg-primary-500 rounded-full animate-pulse" style={{animation: 'loadingDots 1.4s infinite'}}></span>
                </div>
                <span className="text-sm font-medium">{Math.round(progress)}%</span>
              </div>
            </motion.div>

            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
              {['{', '}', '<', '>', '/', '\\', '(', ')'].map((char, index) => (
                <motion.div
                  key={char}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 0.5, 0],
                    scale: [0, 1, 0],
                    x: Math.sin(index * 45 * Math.PI / 180) * 200,
                    y: Math.cos(index * 45 * Math.PI / 180) * 200,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/2 left-1/2 text-2xl md:text-4xl font-bold text-primary-300"
                  style={{
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {char}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen 