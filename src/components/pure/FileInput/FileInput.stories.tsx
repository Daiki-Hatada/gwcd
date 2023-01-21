import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import FileInput from './FileInput'


export default {
  component: FileInput,
} as ComponentMeta<typeof FileInput>

export const Default: ComponentStoryObj<typeof FileInput> = {
  args: {},
  storyName: 'Default',
}
