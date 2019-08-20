import { useEffect } from 'react'
import { useContextState } from '../containers/StateProvider'

export default data => {
  const { isDataInit, setDataInit } = useContextState()
  useEffect(() => {
    if (data.length > 1) setDataInit(true)
    return () => {
      setDataInit(false)
    }
  }, [data, setDataInit])

  return { isDataInit }
}
