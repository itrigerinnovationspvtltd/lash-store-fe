import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const SmoothScroll = ({ children }) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Smooth spring animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Parallax effects
  const y = useTransform(smoothProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 1.1])

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity, scale }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  )
}

export default SmoothScroll
