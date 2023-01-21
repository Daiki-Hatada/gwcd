import { MouseEventHandler } from 'react'

import { IconName } from '../Icon'

export type DropDownContent = {
  label: string
  onClick: MouseEventHandler<HTMLButtonElement>
  iconName?: IconName
}

export type DropDownProps = {
  contents: DropDownContent[]
  toggleIconName?: IconName
  position?: 'left' | 'right' | 'center'
}
