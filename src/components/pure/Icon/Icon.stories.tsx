import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import React from 'react'

import Icon, { _ICONS, IconName } from './Icon'


export default {
  component: Icon,
} as ComponentMeta<typeof Icon>

export const Default: ComponentStoryObj<typeof Icon> = {
  args: {
    iconName: 'dotMenu',
  },
  storyName: 'Default',
}
export const All: ComponentStoryObj<typeof Icon> = {
  storyName: 'All_dev',
  render: ({ ...props }) => (
      <>
        {Object.keys(_ICONS).map((iconName) => (
            <div key={iconName} style={{ margin: '1rem', border: '1px solid red' }}>
              <div>{iconName}</div>
              <Icon style={{ border: '1px solid blue' }} {...props} iconName={iconName as IconName} />
            </div>
          ))}
      </>
    ),
}
