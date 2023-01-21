import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import Step from './Step'


export default {
  component: Step,
} as ComponentMeta<typeof Step>

export const Default: ComponentStoryObj<typeof Step> = {
  args: {},
  storyName: 'Default',
}
