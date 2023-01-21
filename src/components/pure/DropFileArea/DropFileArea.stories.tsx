import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import Button from './DropFileArea'


export default {
  component: Button,
} as ComponentMeta<typeof Button>

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    onDrop: (fileList) => {
      const file = fileList.item(0)
      if (file) {
        alert(`You dropped this file on me: ${file.name}`)
      }
    },
    children: '???',
  },
  storyName: 'Default',
}
