import { useEffect } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

export const useSmoothScroll = () => {
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    // Disable default scroll behavior
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return { scrollYProgress: smoothProgress }
}

export const useParallax = (distance = 50) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -distance])
  return y
}

export const useFadeInOnScroll = (threshold = 0.1) => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, threshold, 1], [0, 1, 1])
  const y = useTransform(scrollYProgress, [0, threshold, 1], [50, 0, 0])
  
  return { opacity, y }
}
