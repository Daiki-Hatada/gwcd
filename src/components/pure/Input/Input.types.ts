import { ReactNode } from 'react'

import { FlexBoxProps } from '../FlexBox/FlexBox.types'

export type InputProps = JSX.IntrinsicElements['input'] & {
  label?: ReactNode
  theme?: 'brand' | 'primary'
  prefix?: ReactNode
  suffix?: ReactNode
  gap?: FlexBoxProps['gap']
  error?: string | boolean
  required?: boolean
  explanation?: string
} & Omit<JSX.IntrinsicElements['input'], 'prefix'>
