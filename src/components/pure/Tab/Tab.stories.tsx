import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import Tab from './Tab'


export default {
  component: Tab,
} as ComponentMeta<typeof Tab>

export const Default: ComponentStoryObj<typeof Tab> = {
  args: {
    contents: [
      {
        label: 'タブ1',
        content: <>コンテンツ1</>,
      },
      {
        label: 'タブ2',
        content: <>コンテンツ2</>,
      },
    ],
  },
  storyName: 'Default',
}
