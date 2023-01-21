import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import Input from './Input'


export default {
  component: Input,
} as ComponentMeta<typeof Input>

export const Default: ComponentStoryObj<typeof Input> = {
  args: {
    explanation: '補足説明',
  },
  storyName: 'Default',
}
