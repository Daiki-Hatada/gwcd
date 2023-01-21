import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import DeleteConfirmModal from './DeleteConfirmModal'


export default {
  component: DeleteConfirmModal,
} as ComponentMeta<typeof DeleteConfirmModal>

export const Default: ComponentStoryObj<typeof DeleteConfirmModal> = {
  args: {},
  storyName: 'Default',
}
