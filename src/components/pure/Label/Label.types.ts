import { ReactNode } from 'react'

import { Color } from '../../../types/Color.types'

export type LabelProps = {
  children: ReactNode
  variant?: 'fill' | 'outline'
  color?:
    | Color
    | string
    | {
        text: Color | string
        backgroundColor: Color | string
      }
  padding?: 'default' | 'none'
  corner?: 'square' | 'round'
} & Omit<JSX.IntrinsicElements['span'], 'color'>
