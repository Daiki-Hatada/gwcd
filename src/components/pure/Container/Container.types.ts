import { ReactNode } from 'react'

export type ContainerProps = {
  children: ReactNode
  padding?: 'none' | 'small' | 'medium' | 'large'
  gap?: 'none' | 'small' | 'medium' | 'large'
}
