import { ChangeEventHandler } from 'react'

export type CheckboxProps = {
  className?: string
  labelText: string
  explanation?: string
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}
