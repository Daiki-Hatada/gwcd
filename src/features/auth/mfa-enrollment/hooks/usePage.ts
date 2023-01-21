import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CLIENT_PATH } from '../../../../constants/clientPath'

export const usePage = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const [sent, setSent] = useState(false)
  const [verificationId, setVerificationId] = useState<string>()

  const onEnroll = (verificationId?: string) => {
    setVerificationId(verificationId)
    setSent(true)
  }

  const onPhoneNumberVerified = () => router.push(CLIENT_PATH.AUTH_SIGN_IN.path)

  const onPreviousButtonClicked = () => router.back()

  return {
    verificationId,
    sent,
    onEnroll,
    onPhoneNumberVerified,
    onPreviousButtonClicked,
    t,
  }
}
