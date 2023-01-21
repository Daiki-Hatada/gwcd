import { CSSProperties, ReactNode } from 'react'

export type StepProps = {
  contents: {
    title: string
    body?: ReactNode
    onClick?: (index: number) => void
  }
  activeIndex?: number // undefinedの場合は全てactiveにする
  direction?: 'horizontal' | 'vertical' // 方向
  className?: string
  style?: CSSProperties
}
