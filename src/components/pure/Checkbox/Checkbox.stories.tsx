import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import Checkbox from './Checkbox'


export default {
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

export const Checked: ComponentStoryObj<typeof Checkbox> = {
  args: {
    labelText: 'テキスト',
    checked: true,
  },
  storyName: 'Checked',
}

export const UnChecked: ComponentStoryObj<typeof Checkbox> = {
  args: {
    labelText: 'テキスト',
    checked: false,
  },
  storyName: 'UnChecked',
}
