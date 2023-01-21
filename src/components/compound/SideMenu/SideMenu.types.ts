import { ReactNode } from 'react'

export type SideMenuProps = {
  direction?: 'left' | 'right'
  className?: string
  onClose?: () => void
  open: boolean
  children: ReactNode
  footer?: ReactNode
}
