import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { FlexBoxProps } from '../../pure/FlexBox/FlexBox.types'

export type CardNumberInputProps<T extends object> = {
  register: UseFormRegister<T>
  firstSixDigitsName: Parameters<UseFormRegister<T>>[0]
  lastFourDigitsName: Parameters<UseFormRegister<T>>[0]
  errors?: FieldErrors<T>
} & FlexBoxProps
