import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import MessageSenderModal from './MessageSenderModal'


export default {
  component: MessageSenderModal,
} as ComponentMeta<typeof MessageSenderModal>

export const Default: ComponentStoryObj<typeof MessageSenderModal> = {
  args: {
    open: true,
    onClose: () => {
      alert('onClose')
    },
    onSend: (message) => {
      alert(`onSend: ${message}`)
    },
    maxLength: 30,
  },
  storyName: 'Default',
}
