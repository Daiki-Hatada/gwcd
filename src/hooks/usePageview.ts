import { useRouter } from 'next/router'
import { useEffect } from 'react'

import * as gtag from '../libs/gtag'

export default function usePageview() {
  const router = useRouter()
  useEffect(() => {
    if (!gtag.GOOGLE_ANALYTICS_ID) {
      return undefined
    }

    const handleRouteChange = (path: string, { shallow }: { shallow: boolean }) => {
      if (!shallow) {
        gtag.pageview(path)
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])
}
