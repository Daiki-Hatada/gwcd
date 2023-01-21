import { IconName } from '../../pure/Icon'

export type SideBarItemSet = {
  title: string
  items: SideBarItem[]
} & JSX.IntrinsicElements['div']

export type SideBarItem = {
  label: string
  icon?: IconName
} & JSX.IntrinsicElements['div']

export type SideBarProps = {
  open: boolean
  itemSets: SideBarItemSet[]
} & JSX.IntrinsicElements['div']
