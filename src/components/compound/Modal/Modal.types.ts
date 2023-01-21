import { ReactNode } from 'react'

import { CardProps } from '../../pure/Card/Card.types'
import { FadeProps } from '../../pure/Fade/Fade.types'

export type ModalProps = {
  open: boolean
  onClose?: () => void
  children?: ReactNode
  padding?: CardProps['padding']
  keepMounted?: FadeProps['keepMounted']
  title?: string | ReactNode
  width?: 'small' | 'default' | 'large'
}
