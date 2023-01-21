---
to: src/components/<%= level %>/<%= name %>/<%= name %>.stories.tsx
unless_exists: true
---
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import <%= name %> from './<%= name %>'

export default {
  component: <%= name %>,
} as ComponentMeta<typeof <%= name %>>

export const Default: ComponentStoryObj<typeof <%= name %>> = {}
