import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AuthProvider } from '../../../contexts/auth.context'
import Header from './Header'


export default {
  component: Header,
} as ComponentMeta<typeof Header>

export const Default: ComponentStoryObj<typeof Header> = {
  args: {},
  storyName: 'Default',
  decorators: [
    (Story) => (
        <AuthProvider>
          <Story />
        </AuthProvider>
      ),
  ],
}
