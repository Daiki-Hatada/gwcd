import { useRouter } from 'next/router'
import { CLIENT_PATH } from '../../../../constants/clientPath'

export const usePage = () => {
  const router = useRouter()
  const onAuth = () => router.push(CLIENT_PATH.INDEX.path)
  return {
    onAuth,
  }
}
