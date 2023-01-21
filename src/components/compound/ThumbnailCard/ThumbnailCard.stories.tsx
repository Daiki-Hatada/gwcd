import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import ThumbnailCard from './ThumbnailCard'


export default {
  component: ThumbnailCard,
} as ComponentMeta<typeof ThumbnailCard>

export const Default: ComponentStoryObj<typeof ThumbnailCard> = {
  args: {},
  storyName: 'Default',
}
