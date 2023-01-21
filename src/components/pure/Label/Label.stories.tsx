import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import Label from './Label'


export default {
  component: Label,
} as ComponentMeta<typeof Label>

export const Default: ComponentStoryObj<typeof Label> = {
  args: {
    children: 'test me',
    color: {
      backgroundColor: 'primary',
      text: 'secondary',
    },
  },
  storyName: 'Default',
}
