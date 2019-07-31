import { useState, useEffect, useRef } from 'react'

export default initialIsVisible => {
  const [isCompVisible, setIsCompVisible] = useState(initialIsVisible)
  const ref = useRef(null)

  const handleHideComp = event => {
    if (event.key === 'Escape') {
      setIsCompVisible(false)
    }
  }

  const handleClick = event => {
    if (ref.current) {
      const insideTarget = ref.current.contains(event.target)
      setIsCompVisible(insideTarget)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleHideComp, true)
    document.addEventListener('click', handleClick, true)
    return () => {
      document.removeEventListener('keydown', handleHideComp, true)
      document.removeEventListener('click', handleClick, true)
    }
  })

  return { ref, isCompVisible, setIsCompVisible }
}
