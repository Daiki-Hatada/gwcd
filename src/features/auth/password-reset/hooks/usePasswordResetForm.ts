import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { handlePasswordResetEmailSender } from '../../../../libs/auth/resetPassword'

type PasswordResetFormData = {
  email: string
}

export const usePasswordResetForm = () => {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
  } = useForm<PasswordResetFormData>()
  const [error, setError] = useState<string | undefined>()

  const onSubmit: SubmitHandler<PasswordResetFormData> = async (data) => {
    const { email } = data
    const { error } = await handlePasswordResetEmailSender(email)
    if (error) {
      setError(error)
    }
  }

  return {
    register,
    errors,
    isSubmitting,
    isValid,
    error,
    onSubmit: handleSubmit(onSubmit, console.error),
    t,
  }
}
