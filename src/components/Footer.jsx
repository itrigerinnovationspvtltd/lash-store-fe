import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Youtube, Twitter, Heart, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/dekalashhilltopatftbelvoir', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/dekalashhilltopatftbelvoir/#', label: 'Instagram' },
    // { icon: Youtube, href: '#', label: 'Youtube' },
    // { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 mx-auto gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-display font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                Deka Lash Hilltop
              </span>
            </motion.h3>
            <p className="text-gray-400 mb-4">
              Premium eyelash extensions and beauty services. Wake up confident and beautiful every day.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Client Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Special Offers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>6458 Old Beulah St</li>
              <li>Alexandria, VA 22315</li>
              <li>
                <a href="tel:+17038289213" className="hover:text-primary-400 transition-colors">
                  (703) 828-9213
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} Deka Lash Hilltop. All rights reserved.
            <span className="flex items-center gap-1">
              Made with <Heart className="text-primary-500" size={16} fill="currentColor" /> for beautiful lashes
            </span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            {' • '}
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

