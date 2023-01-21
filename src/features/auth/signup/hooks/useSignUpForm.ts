import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { signUp } from '../../../../libs/auth/signUp'

export type SignUpFormData = {
  email: string
  password: string
}

export const useSignUpForm = () => {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
  } = useForm<SignUpFormData>({
    mode: 'onChange',
  })
  const [error, setError] = useState<string | undefined>()

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    const { email, password } = data
    const { error } = await signUp({
      email,
      password,
    })
    if (error) {
      setError(error)
    } else {
      setError(undefined)
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
