import { useState, useEffect } from 'react'

export default compId => {
  const [compWidth, setCompWidth] = useState(0)
  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    const targetComp = document.getElementById(compId)
    setCompWidth(targetComp.clientWidth)
  }, [compId]) // Only re-run the effect if compId changes
  return compWidth
}
