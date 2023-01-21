import { ReactNode } from 'react'

export type AnchorLinkProps = {
  children: ReactNode
  href: string
  style?: JSX.IntrinsicElements['a']['style']
}
