import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import FileDownloader from './FileDownloader'


export default {
  component: FileDownloader,
} as ComponentMeta<typeof FileDownloader>

export const Default: ComponentStoryObj<typeof FileDownloader> = {
  args: {},
  storyName: 'Default',
}
