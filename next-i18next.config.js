// @ts-check
/** @type {import('next-i18next').UserConfig} */
const userConfig = {
  i18n: {
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'ja',
    locales: (process.env.NEXT_PUBLIC_SUPPORTED_LOCALES || 'ja').split(','),
  },
  reloadOnPrerender: true,
}

module.exports = userConfig
