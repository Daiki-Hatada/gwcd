import { useEffect } from 'react'

export const useWarningBeforUnload = () => {
  useEffect(() => {
    const preventUnload: OnBeforeUnloadEventHandler = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      /* eslint-disable-next-line no-param-reassign */
      event.returnValue = null
      return null
    }
    globalThis.addEventListener('beforeunload', preventUnload)
    return () => {
      globalThis.removeEventListener('beforeunload', preventUnload)
    }
  }, [])
}
