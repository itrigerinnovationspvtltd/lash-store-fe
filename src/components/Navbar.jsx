import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'

const Navbar = ({setOpenPopup}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl md:text-3xl font-display font-bold"
          >
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Luxe Lash Studio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Reviews
            </button>
            <button onClick={() => scrollToSection('location')} className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Location
            </button>
            <a href="tel:+13364220626" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold">
              <Phone size={20} />
              <span className="hidden lg:inline">(336) 422-0626</span>
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpenPopup(true)}
              className="btn-primary"
            >
              Book Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-primary-600"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-6 pb-4 space-y-4 bg-white px-3"
          >
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
              Services
            </button>
            <button onClick={() => scrollToSection('reviews')} className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
              Reviews
            </button>
            <button onClick={() => scrollToSection('location')} className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
              Location
            </button>
            <a href="tel:+13364220626" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold py-2">
              <Phone size={20} />
              (336) 422-0626
            </a>
            <button onClick={() =>{
               setOpenPopup(true)
              setIsMobileMenuOpen(false)
        }}
        className="btn-primary w-full">
              Book Now
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar

