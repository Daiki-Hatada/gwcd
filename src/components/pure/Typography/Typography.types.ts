import { CSSProperties, ReactNode } from 'react'

import { Color } from '../../../types/Color.types'

export type TypographyProps = {
  children: ReactNode
  size?: 'largest' | 'larger' | 'large' | 'medium' | 'small' | 'smaller' | 'smallest'
  color?: Color
  style?: JSX.IntrinsicElements['span']['style']
  align?: CSSProperties['textAlign']
  weight?: CSSProperties['fontWeight']
  whiteSpace?: CSSProperties['whiteSpace']
  className?: string
}
