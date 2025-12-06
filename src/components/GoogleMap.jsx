import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'

const GoogleMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
    >
      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(circle, #ec4899 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />
        </div>
        
        {/* Content */}
        <div className="text-center p-8 relative z-10">
          {/* Location Icon */}
          <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-10 h-10 text-white" />
          </div>
          
          {/* Business Info */}
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Deka Lash Hilltop</h3>
          <p className="text-gray-600 mb-2">6458 Old Beulah St</p>
          <p className="text-gray-600 mb-6">Alexandria, VA 22315</p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.google.com/maps/place/Deka+Lash/@38.7423068,-77.1656307,17z/data=!4m15!1m8!3m7!1s0x89b7ad1ba7b5fa05:0x10e5ad425e11e557!2s6458+Old+Beulah+St,+Alexandria,+VA+22315,+USA!3b1!8m2!3d38.7423068!4d-77.1630558!16s%2Fg%2F11pvcwvdr4!3m5!1s0x89b7ad86d677ba99:0xc09d631d5ba7795d!8m2!3d38.7423068!4d-77.1630558!16s%2Fg%2F11fkyyggbc?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
            >
              <MapPin size={20} />
              View on Google Maps
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+17038289213" 
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-full font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-colors"
            >
              <Phone size={20} />
              (703) 828-9213
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default GoogleMap
