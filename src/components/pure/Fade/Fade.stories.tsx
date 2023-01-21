import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import Fade from './Fade'

export default {
  component: Fade,
  argTypes: {
    show: {
      description: '表示するかどうか',
    },
    addEventListener: {
      description: '各種イベント',
      defaultValue: {
        summary: 'undefined',
      },
    },
    children: {
      control: false,
    },
    keepMounted: {
      description: 'trueの場合fadeoutした後もDOM上にchildrenが残ります。',
      defaultValue: {
        summary: 'false',
      },
    },
  },
} as ComponentMeta<typeof Fade>

export const Default: ComponentStoryObj<typeof Fade> = {
  args: {
    show: true,
    children: <div style={{ backgroundColor: 'red', width: '20rem', height: '20rem' }} />,
  },

  storyName: 'Default',
}
