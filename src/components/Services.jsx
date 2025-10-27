import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Zap, Crown, Star } from 'lucide-react'
import img1 from '../assets/bg1.png'
import img2 from '../assets/bg2.png'
import img3 from '../assets/img3.avif'
import img4 from '../assets/img2.avif'


const services = [
  {
    icon: Zap,
    title: 'TrueXpress',
    description: 'Light-volume look with natural-looking length in half the time of a standard volume appointment.',
    features: ['Quick application', 'Natural look', 'Lightweight', 'Perfect for beginners'],
    gradient: 'from-blue-500 to-cyan-500',
    image: img1
  },
  {
    icon: Sparkles,
    title: 'Hybrid Lashes',
    description: 'The perfect blend of classic and volume techniques for a fuller, textured look.',
    features: ['Best of both worlds', 'Custom density', 'Wispy effect', 'Natural elegance'],
    gradient: 'from-purple-500 to-pink-500',
    image: img4
  },
  {
    icon: Star,
    title: 'Volume Lashes',
    description: 'Multiple lightweight extensions applied to each natural lash for dramatic fullness.',
    features: ['Dramatic fullness', 'Fluffy appearance', 'Customizable volume', 'Long-lasting'],
    gradient: 'from-primary-500 to-rose-500',
    image: img2
  },
  {
    icon: Crown,
    title: 'Mega Volume',
    description: 'The ultimate in lash luxury with the fullest, most dramatic look possible.',
    features: ['Maximum fullness', 'Red carpet ready', 'Ultra-glamorous', 'Show-stopping'],
    gradient: 'from-gold-500 to-amber-600',
    image: img3
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white scroll-smooth">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Get The Lashes That Fit You
          </h2>
          <p className="section-subtitle">
            Our expert lash stylists specialize in designing custom lashes tailored to your unique style.
            Lightweight extensions that feel so natural, you'll forget you have them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border border-gray-100">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} eyelash extensions`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <service.icon className="text-white" size={24} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <div className="w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-600 mb-6">
            Not sure which style is right for you?
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+13364220626"
            className="btn-primary inline-block"
          >
            Get a Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

