import { ReactNode } from 'react'

export type FadeProps = {
  show: boolean
  children: ReactNode
  addEventListener?: (type: 'in' | 'out', status: 'start' | 'end') => void
  keepMounted?: boolean
}
