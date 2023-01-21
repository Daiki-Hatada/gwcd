import '../styles/globals.scss'
import { appWithTranslation } from 'next-i18next'

import type { AppProps } from 'next/app'

import { RecoilRoot } from 'recoil'
import { Loader } from '../components'
import { AuthProvider } from '../contexts/auth.context'
import { ThemeProvider } from '../contexts/theme.context'
import usePageview from '../hooks/usePageview'

function App({ Component, pageProps }: AppProps) {
  usePageview()
  return (
    <RecoilRoot>
      <ThemeProvider>
        <AuthProvider>
          <Loader />
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default appWithTranslation(App)
