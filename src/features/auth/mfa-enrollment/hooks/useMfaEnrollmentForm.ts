import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { enrollMfa } from '../../../../libs/auth/signIn'
import { isJapanesePhoneNumber } from '../../../../types/PhoneNumber.types'
import { toE164 } from '../../../../utils/phoneNumber'
import { MfaEnrollmentFormProps } from '../components/MfaEnrollmentForm'

type MfaEnrollmentFormData = {
  phoneNumber: string
}

export const useMfaEnrollmentForm = ({ onEnroll }: MfaEnrollmentFormProps) => {
  const { t } = useTranslation()
  const {
    register,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<MfaEnrollmentFormData>()
  const [error, _setError] = useState<string | undefined>()

  const onSubmit: SubmitHandler<MfaEnrollmentFormData> = async (data) => {
    const { phoneNumber } = data
    if (!isJapanesePhoneNumber(phoneNumber)) return
    const e164PhoneNumber = toE164(phoneNumber)
    const verificationId = await enrollMfa({ phoneNumber: e164PhoneNumber })
    return onEnroll?.(verificationId)
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
