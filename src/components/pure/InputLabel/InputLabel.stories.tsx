import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import InputLabel from './InputLabel'


export default {
  component: InputLabel,
} as ComponentMeta<typeof InputLabel>

export const Default: ComponentStoryObj<typeof InputLabel> = {
  args: {},
  storyName: 'Default',
}
