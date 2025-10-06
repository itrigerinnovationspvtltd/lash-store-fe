import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Eye, Sparkles } from 'lucide-react'

const BeforeAfter = () => {
  const [activeTab, setActiveTab] = useState('before')

  const comparisons = [
    {
      id: 'natural',
      title: 'Natural Lashes',
      before: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      after: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      description: 'Transform your natural lashes into stunning extensions'
    },
    {
      id: 'volume',
      title: 'Volume Lashes',
      before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      after: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      description: 'Achieve dramatic fullness with volume extensions'
    }
  ]

  const [currentComparison, setCurrentComparison] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            See The{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the incredible difference our expert lash extensions make
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Comparison Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-2 shadow-lg">
              {comparisons.map((comparison, index) => (
                <button
                  key={comparison.id}
                  onClick={() => setCurrentComparison(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    currentComparison === index
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  {comparison.title}
                </button>
              ))}
            </div>
          </div>

          {/* Before/After Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <button
                onClick={() => setActiveTab('before')}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'before'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Eye size={20} />
                Before
              </button>
              <button
                onClick={() => setActiveTab('after')}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'after'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                <Sparkles size={20} />
                After
              </button>
            </div>
          </div>

          {/* Image Comparison */}
          <motion.div
            key={`${currentComparison}-${activeTab}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={activeTab === 'before' ? comparisons[currentComparison].before : comparisons[currentComparison].after}
                alt={`${comparisons[currentComparison].title} - ${activeTab}`}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Label */}
              <div className="absolute bottom-6 left-6">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold ${
                  activeTab === 'before' 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-primary-600 text-white'
                }`}>
                  {activeTab === 'before' ? <Eye size={20} /> : <Sparkles size={20} />}
                  {activeTab === 'before' ? 'Before' : 'After'}
                </div>
              </div>

              {/* Description */}
              <div className="absolute bottom-6 right-6 max-w-xs">
                <p className="text-white text-sm font-medium">
                  {comparisons[currentComparison].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentComparison((prev) => (prev === 0 ? comparisons.length - 1 : prev - 1))}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
            >
              <ArrowLeft className="text-primary-600" size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentComparison((prev) => (prev === comparisons.length - 1 ? 0 : prev + 1))}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
            >
              <ArrowRight className="text-primary-600" size={20} />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {comparisons.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentComparison(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentComparison ? 'w-8 bg-primary-600' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
