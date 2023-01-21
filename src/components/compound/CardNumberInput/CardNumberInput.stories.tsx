import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { useForm } from 'react-hook-form'
import CardNumberInput from './CardNumberInput'


export default {
  component: CardNumberInput,
} as ComponentMeta<typeof CardNumberInput>

type FormData = {
  firstSixDigitsName: string
  lastFourDigitsName: string
}

export const Default: ComponentStoryObj<typeof CardNumberInput<FormData>> = {
  args: {
    firstSixDigitsName: 'firstSixDigitsName',
    lastFourDigitsName: 'lastFourDigitsName',
  },
  storyName: 'Default',
  decorators: [
    (Story) => {
      const { register } = useForm<FormData>({
        mode: 'onChange',
      })
      return (
        <Story
          args={{
            register,
            firstSixDigitsName: 'firstSixDigits',
            lastFourDigitsName: 'lastFourDigits',
          }}
        />
      )
    },
  ],
}
