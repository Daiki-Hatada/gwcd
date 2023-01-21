import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import DateSelector from './DateSelector'


export default {
  component: DateSelector,
} as ComponentMeta<typeof DateSelector>

export const Default: ComponentStoryObj<typeof DateSelector> = {
  args: {},
  storyName: 'Default',
}
