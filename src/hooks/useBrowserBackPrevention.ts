import { useEffect } from 'react'

export const useBrowserBackPrevention = ({ message }: { message?: string } = {}) => {
  useEffect(() => {
    const preventBrowserBack = (event: PopStateEvent) => {
      event.preventDefault()
      globalThis.history.pushState(null, '', globalThis.location.href)
      globalThis.history.go(1)
      alert(message || 'Browser back is not allowed.')
    }
    globalThis.addEventListener('popstate', preventBrowserBack)
    return () => {
      globalThis.removeEventListener('popstate', preventBrowserBack)
    }
  }, [message])
}
