import { useState, useEffect } from 'react'

export default compId => {
  const [isNarrowComp, setIsNarrowComp] = useState(false)
  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    const targetComp = document.getElementById(compId)
    if (targetComp.clientWidth < 140) {
      setIsNarrowComp(true)
    }
  }, [compId]) // Only re-run the effect if compId changes
  return isNarrowComp
}
