'use client'

import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import LoadingScreen from '../components/LoadingScreen'
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Enable scrolling after loading
    document.body.style.overflow = 'unset'
    // Scroll to top after loading
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  // Scroll to top on page load/refresh and disable scrolling during loading
  React.useEffect(() => {
    window.scrollTo(0, 0)
    // Disable scrolling during loading
    document.body.style.overflow = 'hidden'
    
    // Cleanup function to ensure scrolling is enabled if component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <main className={`min-h-screen ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navigation isLoadingComplete={!isLoading} />
        <Hero isLoadingComplete={!isLoading} />
        <About />
        <Projects />
        <Contact />
        <ScrollToTop />
      </main>
    </>
  )
} 