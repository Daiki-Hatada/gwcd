import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import Pagination from './Pagination'


export default {
  component: Pagination,
} as ComponentMeta<typeof Pagination>

export const Default: ComponentStoryObj<typeof Pagination> = {
  args: {},
  storyName: 'Default',
}
