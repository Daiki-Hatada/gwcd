import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { confirmMfaEnrollment } from '../../../../libs/auth/signIn'
import { PhoneNumberVerificationFormProps } from '../components/PhoneNumberVerificationForm'

type PhoneNumberVerificationFormData = {
  verificationCode: string
}

export const usePhoneNumberVerificationForm = ({ onEnroll, verificationId }: PhoneNumberVerificationFormProps) => {
  const { t } = useTranslation()
  const {
    register,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<PhoneNumberVerificationFormData>()
  const [error, _setError] = useState<string | undefined>()

  const onSubmit: SubmitHandler<PhoneNumberVerificationFormData> = async (data) => {
    const { verificationCode } = data
    await confirmMfaEnrollment({ verificationId, verificationCode })
    return onEnroll?.()
  }
  return {
    register,
    isSubmitting,
    handleSubmit,
    error,
    onSubmit: handleSubmit(onSubmit, console.error),
    t,
  }
}
