import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import Modal from './Modal'


export default {
  component: Modal,
} as ComponentMeta<typeof Modal>

export const Default: ComponentStoryObj<typeof Modal> = {
  args: {},
  storyName: 'Default',
}
