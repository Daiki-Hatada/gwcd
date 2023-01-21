import type { IconName } from './Icon'

export type IconProps = {
  className?: string
  iconName: IconName
  color?: string
  size?: 'large' | 'medium' | 'small'
  reversed?: boolean
} & JSX.IntrinsicElements['div']
