import { loadEnvConfig } from '@next/env'

const config = (): void => {
  process.env.TZ = 'Asia/Tokyo'
  loadEnvConfig(process.env.PWD || process.cwd())
}

export default config
