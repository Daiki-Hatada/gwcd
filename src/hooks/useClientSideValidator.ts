import { useEffect, useState } from 'react'

export const useClientSideValidator = () => {
  const [isClientSide, setIsClientSide] = useState(false)

  useEffect(() => {
    setIsClientSide(true)
  }, [])

  return { isClientSide }
}
