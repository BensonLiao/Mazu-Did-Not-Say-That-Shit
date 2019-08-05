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

  // Don't forget to set useCapture = false,
  // or pass as a object: { capture: boolean, once: boolean, passive: boolean }
  // otherwise click from other elements
  // with click listeners will not work as expected
  // So here I call: target.addEventListener(type, listener[, useCapture]);
  // ref: https://developer.mozilla.org/zh-TW/docs/Web/API/EventTarget/addEventListener
  // And also remember to pass an empty array as second argument,
  // so EventListener will only add and remove upon didMount and didUnmount.
  useEffect(() => {
    document.addEventListener('keydown', handleHideComp, false)
    document.addEventListener('click', handleClick, false)
    return () => {
      document.removeEventListener('keydown', handleHideComp, false)
      document.removeEventListener('click', handleClick, false)
    }
  }, [])

  return { ref, isCompVisible, setIsCompVisible }
}
