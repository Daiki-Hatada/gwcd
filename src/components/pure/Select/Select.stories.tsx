import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import Select from './Select'


export default {
  component: Select,
} as ComponentMeta<typeof Select>

export const Default: ComponentStoryObj<typeof Select> = {
  args: {
    initialOption: { value: '0', name: '選択してください' },
    options: [
      { value: '1', name: 'One' },
      { value: '2', name: 'Two' },
      { value: '3', name: 'Three' },
    ],
    width: 200,
    label: 'タイトル',
    explanation: '補足説明',
  },
  storyName: 'Default',
}
