import { ReactNode } from 'react'

export type RadioButtonProps = {
  className?: string
  name?: JSX.IntrinsicElements['input']['name']
  value?: JSX.IntrinsicElements['input']['value']
  theme?: 'primary'
  defaultChecked?: JSX.IntrinsicElements['input']['checked']
  checked?: JSX.IntrinsicElements['input']['checked']
  inputStyle?: JSX.IntrinsicElements['input']['style']
  labelStyle?: JSX.IntrinsicElements['label']['style']
  children?: ReactNode
  onChange?: JSX.IntrinsicElements['input']['onChange']
  disabled?: JSX.IntrinsicElements['input']['disabled']
  variant?: 'outline' | 'text'
}
