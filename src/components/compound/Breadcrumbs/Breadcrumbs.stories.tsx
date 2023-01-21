import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import Breadcrumbs from './Breadcrumbs'


export default {
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>

export const Default: ComponentStoryObj<typeof Breadcrumbs> = {
  args: {},
  storyName: 'Default',
  parameters: {
    nextRouter: {
      pathname: '/',
      asPath: '/',
      query: {},
      push: () => {
        alert('Pushed')
      },
    },
  },
}
