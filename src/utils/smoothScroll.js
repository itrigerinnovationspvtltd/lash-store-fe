// Smooth scroll utility for Apple-style scrolling
export const smoothScrollTo = (targetId, offset = 0) => {
  const target = document.getElementById(targetId)
  if (target) {
    const targetPosition = target.offsetTop - offset
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 1000 // 1 second
    let start = null

    const animation = (currentTime) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration)
      window.scrollTo(0, run)
      if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    requestAnimationFrame(animation)
  }
}

// Easing function for smooth animation
const easeInOutCubic = (t, b, c, d) => {
  t /= d / 2
  if (t < 1) return c / 2 * t * t * t + b
  t -= 2
  return c / 2 * (t * t * t + 2) + b
}

// Enhanced scroll behavior
export const initSmoothScroll = () => {
  // Add smooth scroll to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href').substring(1)
      smoothScrollTo(targetId, 80) // 80px offset for fixed navbar
    })
  })
}
