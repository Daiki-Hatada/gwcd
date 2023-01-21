import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import Button from './Button'


export default {
  component: Button,
} as ComponentMeta<typeof Button>

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    onClick: () => {
      alert('Call me?')
    },
    children: 'ボタン',
    disabled: false,
  },
  storyName: 'Default',
}
