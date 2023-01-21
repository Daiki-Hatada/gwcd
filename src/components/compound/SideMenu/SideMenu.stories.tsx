import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { SideMenu } from './index'

export default {
  component: SideMenu,
} as ComponentMeta<typeof SideMenu>

export const Default: ComponentStoryObj<typeof SideMenu> = {
  args: {},
  storyName: 'Default',
}
