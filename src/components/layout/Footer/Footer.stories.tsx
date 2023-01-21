import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import Footer from './Footer'


export default {
  component: Footer,
} as ComponentMeta<typeof Footer>

export const Default: ComponentStoryObj<typeof Footer> = {
  args: {},
  storyName: 'Default',
}
