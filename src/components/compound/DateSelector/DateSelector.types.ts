import { ReactNode } from 'react'

export type DateSelectorProps = {
  withTimeSelect?: boolean // default = false
  onChange?: (date: Date) => void
  value?: Date
  label?: ReactNode // <InputLabel>{label</InputLabel>挟む
}
