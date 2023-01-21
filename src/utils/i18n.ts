import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import commonInEnglishUs from '../../public/locales/en-US/common.json'
import common from '../../public/locales/ja/common.json'

export const defaultNS = 'common'
export const resources = {
  ja: {
    common,
  },
  'en-US': {
    common: commonInEnglishUs,
  },
} as const

i18n.use(initReactI18next).init({
  lng: 'ja',
  ns: ['common'],
  defaultNS,
  resources,
  keySeparator: '.',
})

export default i18n
