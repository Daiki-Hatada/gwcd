import { IconName } from '../Icon'

export type ButtonProps = {
  theme?: 'primary' | 'danger' | 'success'
  size?: 'large' | 'medium' | 'small'
  variant?: 'fill' | 'outlined' | 'pale'
  loading?: boolean
  fullWidth?: boolean
  iconName?: IconName
} & JSX.IntrinsicElements['button']
