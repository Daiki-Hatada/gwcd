import { ReactNode } from 'react'

export type TabContent = {
  label: ReactNode
  content: ReactNode
}
export type TabProps = {
  contents: TabContent[]
  onChange?: (selectIndex: number) => void
  selectedIndex?: number
  defaultIndex?: number
}
