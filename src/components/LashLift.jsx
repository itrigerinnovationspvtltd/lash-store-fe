import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Clock, Droplet, Feather } from 'lucide-react'

const LashLift = () => {
  const benefits = [
    {
      icon: Feather,
      title: '100% Natural',
      description: 'All-natural, semi-permanent application that enhances your own lashes'
    },
    {
      icon: Clock,
      title: '6-8 Weeks',
      description: 'Long-lasting results that keep your lashes lifted for weeks'
    },
    {
      icon: Heart,
      title: 'Low Maintenance',
      description: 'Perfect for when you take a break from extensions or prefer a natural look'
    },
    {
      icon: Droplet,
      title: 'Optional Tinting',
      description: 'Add a tint for darker, more defined lashes or keep it natural'
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
              Natural Beauty Enhancement
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Natural Beauty Lash Lift & Tinting
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Say goodbye to the hassle of lash curlers and hello to perfectly lifted lashes. 
              Our lash lift boosts your natural lashes from the root, giving them a curled, 
              lengthened appearance that lasts for weeks.
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
              Book Your Lash Lift
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
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
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
                      'Taking a break from lash extensions',
                      'First-time lash enhancement',
                      'Natural, everyday look',
                      'Special occasions',
                      'Low-maintenance beauty routine'
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
                <div className="text-3xl font-bold">6-8</div>
                <div className="text-sm">Weeks</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl p-6 shadow-xl"
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

export default LashLift

