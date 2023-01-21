import '../src/styles/colors.scss'
import '../src/styles/globals.scss'
import * as NextImage from 'next/image'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import i18n from './i18next.js'

const DefaultNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <DefaultNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider, // next 13 (using next/router) / next < 12
  },
  i18n,
  locale: 'ja',
  locales: {
    'en-US': 'English',
    ja: '日本語',
  },
}
