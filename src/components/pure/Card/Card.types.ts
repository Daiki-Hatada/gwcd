import { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export type CardProps = {
  className?: string
  children: ReactNode
  theme?: 'background' | 'brand' | 'error' | 'disabled'
  padding?: 'medium' | 'small' | 'large' | null
  withShadow?: boolean
  hoverable?: boolean
  clickable?: boolean
  maxHeight?: CSSProperties['maxHeight']
  style?: JSX.IntrinsicElements['div']['style']
  onClick?: MouseEventHandler
  fullWidth?: boolean
}
