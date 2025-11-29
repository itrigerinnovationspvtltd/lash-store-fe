import React, { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SpecialOffer from './components/SpecialOffer'
import Reviews from './components/Reviews'
import Services from './components/Services'
import BeforeAfter from './components/BeforeAfter'
import LashLift from './components/LashLift'
import Location from './components/Location'
import Footer from './components/Footer'
import { initSmoothScroll } from './utils/smoothScroll'
import LeadFormPopup from './components/LeadFormPopup';

function App() {

  const [openPopup, setOpenPopup] =useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setOpenPopup(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    // Initialize smooth scroll
    initSmoothScroll()
    
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Navbar setOpenPopup={setOpenPopup}/>
      <Hero />
      <LeadFormPopup open={openPopup} setOpen={setOpenPopup} />
      <SpecialOffer />
      <Reviews />
      <Services />
      <BeforeAfter />
      <LashLift />
      <Location />
      <Footer />
    </div>
  )
}

export default App

