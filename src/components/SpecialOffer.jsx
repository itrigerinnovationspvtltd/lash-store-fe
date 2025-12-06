import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Tag, Gift, Phone } from 'lucide-react'

const SpecialOffer = () => {
  return (
    <section id="offer" className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 relative overflow-hidden scroll-smooth">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
          >
            <Gift className="text-white" size={24} />
            <span className="text-white font-semibold">Limited Time Offer</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            TrueXpress Lash Extensions
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Get the lashes you've always dreamed of at an incredible price
          </p>

          {/* Pricing */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Tag className="text-primary-600" size={32} />
              <div className="text-left">
                <div className="text-gray-500 text-lg line-through">Regular $170</div>
                <div className="text-5xl md:text-6xl font-bold text-primary-600">$89.99</div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-6 py-3 rounded-full font-semibold mb-8">
              <Clock size={20} />
              Save $80 - Limited Time Only!
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
              {[
                'Light-volume natural look',
                'Professional application',
                'Lasts 6-8 weeks',
                'Ultra-lightweight',
                'Customized to your style',
                'Premium quality lashes',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+17038289213"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call to Book - (703) 828-9213
              </motion.a>
            </div>
          </motion.div>

          <p className="text-white/80 text-sm">
            *Offer valid for new clients. Cannot be combined with other promotions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SpecialOffer

