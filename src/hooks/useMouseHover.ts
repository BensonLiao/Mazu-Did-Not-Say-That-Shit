import { useState } from 'react'

export default () => {
  const [isHover, setIsHover] = useState(false)
  return [isHover, setIsHover]
}
