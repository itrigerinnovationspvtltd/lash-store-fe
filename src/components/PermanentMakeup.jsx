import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Clock, Droplet, Feather } from 'lucide-react'
import img1 from '../assets/bg5.webp'

const PermanentMakeup = () => {
  const benefits = [
    {
      icon: Feather,
      title: 'Natural-Looking Results',
      description: 'Soft, realistic, and tailored to your face shape. Our PMU techniques create definition without the “done” look—perfect for clients who want to cut their routine in half while looking polished 24/7.'
    },
    {
      icon: Clock,
      title: 'Long-Lasting Wear',
      description: 'Enjoy beautiful, low-maintenance results that last 1–3 years depending on the service.'
    },
    {
      icon: Heart,
      title: 'Customized to You',
      description: 'Whether you prefer ultra-natural or glam, we design every brow, lip, or liner to match your features and goals.'
    },
    {
      icon: Droplet,
      title: 'Ideal for Busy Lifestyles',
      description: 'Perfect for professionals, moms, fitness lovers, and anyone tired of spending 20 minutes on brows every morning.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white scroll-smooth">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold mb-6">
              Permanent Makeup Enhancement
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Effortless Beauty With PMU Brows, Lips & Liner
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Wake up flawless every day with our premium permanent makeup services. From hyper-realistic brows to softly defined lips and smudge-proof liner, our artists enhance your natural features with precision, artistry, and long-lasting results.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                      <benefit.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+13364220626"
              className="btn-primary inline-block"
            >
              Book Your Permanent Makeup
            </motion.a>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Image */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={img1}
                    alt="Natural lash lift and tinting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-sm font-semibold text-gray-800">100% Natural</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    Perfect For:
                  </h3>

                  <ul className="space-y-3">
                    {[
                      'Clients with sparse or uneven browsLooking for fuller, more defined brows without daily filling.',
                      'Busy professionals & on-the-go lifestylesWake up ready with zero effort (coffee not included, but highly recommended).',
                      'Active clients & gym-goersSmudge-proof, sweat-proof, cry-proof — life-proof',
                      'Those with makeup allergies or sensitivitiesA great alternative to daily brow pencils, liners, and lipsticks.',
                      'Anyone wanting long-lasting definitionBrows, lips, and liner that stay put for 1–3 years.',
                      'Enhancing natural featuresSoft, realistic shading for a polished, everyday look.'
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-gold-400 to-gold-500 text-white rounded-2xl p-6 shadow-xl"
              >
                <div className="text-3xl font-bold">1-3</div>
                <div className="text-sm">years</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-16 -left-6 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl p-6 shadow-xl"
              >
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">Natural</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PermanentMakeup ;

