import { CSSProperties, ReactNode } from 'react'

import { IconProps } from '../Icon/Icon.types'

type AccordionContent = {
  label: ReactNode
  content: ReactNode
}
export type AccordionProps = {
  contents: AccordionContent[]
  labelStyle?: CSSProperties
  contentStyle?: CSSProperties
  iconColor?: IconProps['color']
  className?: string
  iconPosition?: 'left' | 'right' | 'none'
  style?: CSSProperties
}
