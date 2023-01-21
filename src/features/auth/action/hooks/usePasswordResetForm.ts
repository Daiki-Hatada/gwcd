import { FirebaseError } from 'firebase/app'
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { auth } from '../../../../libs/firebase/clientApp'

export type PasswordResetFormData = {
  password: string
}

export const usePasswordResetForm = ({ oobCode, continueUrl }: { oobCode: string; continueUrl: string }) => {
  const router = useRouter()
  const { t } = useTranslation()
  const {
    register,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
  } = useForm<PasswordResetFormData>({
    mode: 'onChange',
  })
  const [, setEmail] = useState<string>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    verifyPasswordResetCode(auth, oobCode)
      .then((email) => {
        setEmail(email)
      })
      .catch((error) => {
        if (!(error instanceof FirebaseError)) throw error
        const { code } = error
        setError(code)
      })
  }, [oobCode])

  const onSubmit: SubmitHandler<PasswordResetFormData> = (data) => {
    const { password } = data

    confirmPasswordReset(auth, oobCode, password)
      .then(() => router.push(continueUrl))
      .catch((error) => {
        if (!(error instanceof FirebaseError)) throw error
        const { code } = error
        setError(code)
      })
  }

  return {
    register,
    errors,
    isValid,
    isSubmitting,
    error,
    t,
    onSubmit: handleSubmit(onSubmit, console.error),
  }
}
