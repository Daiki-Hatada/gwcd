import { existsSync } from 'fs'
import { CLIENT_PATH } from '../constants/clientPath'

export const assertIsClientPathValid = (key: keyof typeof CLIENT_PATH) => {
  const pageFileExists = existsSync(`${CLIENT_PATH[key].path}/index.page.tsx`)
  if (!pageFileExists)
    throw new Error(
      `File not found at the value of ${key}. ${Object.keys({ CLIENT_PATH })[0]} may not be properly configured.`,
    )
}
