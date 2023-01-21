import { FirebaseError } from 'firebase/app'
import { applyActionCode } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ERROR_CODE } from '../../../../constants/firebase/auth'
import { useLoadingMutator } from '../../../../globalStates/loading'
import { auth } from '../../../../libs/firebase/clientApp'

export const useEmailVerificationForm = ({ oobCode, continueUrl }: { oobCode: string; continueUrl: string }) => {
  const router = useRouter()
  const { t } = useTranslation()
  const { setLoading } = useLoadingMutator({ initialValue: true })
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    applyActionCode(auth, oobCode)
      .catch((error) => {
        if (!(error instanceof FirebaseError)) throw error
        const { code } = error
        if (code === ERROR_CODE.INVALID_ACTION_CODE) return // False negative error bug of Firebase Authentication?
        setError(code)
      })
      .finally(() => {
        setLoading(false)
        return router.push(continueUrl)
      })
  }, [oobCode, continueUrl, router, setLoading])

  return {
    t,
    error,
  }
}
