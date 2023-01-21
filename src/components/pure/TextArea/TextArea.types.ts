import { ReactNode } from 'react'

export type TextAreaProps = {
  children?: ReactNode
  label?: string
  error?: string
  textareaMaxHeight?: number
} & JSX.IntrinsicElements['textarea']
