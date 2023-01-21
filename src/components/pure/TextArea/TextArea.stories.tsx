import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import TextArea from './TextArea'


export default {
  component: TextArea,
} as ComponentMeta<typeof TextArea>

export const Default: ComponentStoryObj<typeof TextArea> = {
  args: {
    label: 'TextArea',
    textareaMaxHeight: 128,
    placeholder: '入力してください',
  },
  storyName: 'Default',
}

export const TextareaError: ComponentStoryObj<typeof TextArea> = {
  args: {
    label: 'TextArea',
    textareaMaxHeight: 128,
    placeholder: '入力してください',
    error: 'error',
  },
  storyName: 'TextareaError',
}

export const ChildrenTrue: ComponentStoryObj<typeof TextArea> = {
  args: {
    label: 'TextArea',
    textareaMaxHeight: 128,
    placeholder: '入力してください',
    children: <div>a</div>,
  },
  storyName: 'ChildrenTrue',
}

export const ChildrenError: ComponentStoryObj<typeof TextArea> = {
  args: {
    label: 'TextArea',
    textareaMaxHeight: 128,
    placeholder: '入力してください',
    error: 'error',
    children: <div>a</div>,
  },
  storyName: 'ChildrenError',
}
