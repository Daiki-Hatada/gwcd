import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { CLIENT_PATH } from '../../../../constants/clientPath'
import { useAuthContext } from '../../../../contexts/auth.context'
import { sendVerificationEmail } from '../../../../libs/auth/verifyEmail'

export const usePage = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const { currentAuthUser } = useAuthContext()
  const onButtonClicked = async () => {
    if (!currentAuthUser?.email) return
    await sendVerificationEmail({
      email: currentAuthUser?.email,
      continueUrl: `${globalThis.origin}${CLIENT_PATH.AUTH_SIGN_IN.path}`,
    })
  }

  return {
    router,
    t,
    currentAuthUser,
    onButtonClicked,
  }
}
