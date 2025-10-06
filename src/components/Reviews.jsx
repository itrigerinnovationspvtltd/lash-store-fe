import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Lisa',
    date: '15 days ago',
    rating: 5,
    text: 'Tina did an amazing hybrid wispy cat eye set on me. The process was smooth, and the final look exceeded my expectations. I\'ve already received so many compliments!',
    platform: 'Google'
  },
  {
    name: 'Jenifer',
    date: '20 days ago',
    rating: 5,
    text: 'Exceptional service and quality. The staff was friendly and professional, making sure I was comfortable throughout the entire session. The attention to detail was remarkable!',
    platform: 'Google'
  },
  {
    name: 'Eliena',
    date: '10 days ago',
    rating: 5,
    text: 'Loved the lashes, will definitely come back! The team was super professional and created a custom look that perfectly suited my face. It was my first time trying lash extensions!',
    platform: 'Facebook'
  },
  {
    name: 'Nicole',
    date: '5 days ago',
    rating: 5,
    text: 'Affordable and professional. They explained the entire process in detail and offered great advice on how to care for my lashes. The salon atmosphere was also very welcoming!',
    platform: 'Google'
  },
  {
    name: 'Anna',
    date: '1 Month ago',
    rating: 5,
    text: 'Best experience ever! I\'ve been to several lash studios, but none compare to the quality and expertise here. My lashes look natural yet glamorous!',
    platform: 'Google'
  },
  {
    name: 'Amelia',
    date: '3 Days ago',
    rating: 5,
    text: 'Highly recommend their services. The stylist was incredibly skilled and patient, ensuring I was happy with the outcome. I\'ve already booked my next appointment!',
    platform: 'Google'
  }
]

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection > 0) {
        return (prevIndex + 1) % reviews.length
      } else {
        return (prevIndex - 1 + reviews.length) % reviews.length
      }
    })
  }

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-gray-50 to-white scroll-smooth">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            What Our Clients Say
          </h2>
          <p className="section-subtitle">
            Join thousands of satisfied clients who love their lashes
          </p>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-gold-500 fill-gold-500" size={28} />
              ))}
            </div>
            <span className="text-3xl font-bold text-gray-900">4.8</span>
            <span className="text-gray-600">/ 5.0</span>
          </div>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="max-w-5xl mx-auto relative">
          <div className="relative h-96 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mx-4">
                  <Quote className="text-primary-200 mb-4" size={48} />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="text-gold-500 fill-gold-500" size={20} />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                    "{reviews[currentIndex].text}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-gray-900 text-lg">
                        {reviews[currentIndex].name}
                      </div>
                      <div className="text-gray-500">
                        {reviews[currentIndex].date}
                      </div>
                    </div>
                    <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold">
                      Posted on {reviews[currentIndex].platform}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronLeft className="text-primary-600" size={24} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronRight className="text-primary-600" size={24} />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-primary-600' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews

