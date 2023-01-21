import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { signInWithEmail } from '../../../../libs/auth/signIn'
import { SignInFormProps } from '../components/SignInForm'

type SignInFormData = {
  email: string
  password: string
}

export const useSignInForm = ({ onAuth }: SignInFormProps) => {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
  } = useForm<SignInFormData>({
    mode: 'onChange',
  })
  const [error, setError] = useState<string | undefined>()

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    const { email, password } = data
    const { error } = await signInWithEmail({
      email,
      password,
    })
    if (error) {
      setError(error)
    } else {
      setError(undefined)
      return onAuth?.()
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
