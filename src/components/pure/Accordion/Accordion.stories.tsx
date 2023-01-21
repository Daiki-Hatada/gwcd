import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import Accordion from './Accordion'


export default {
  component: Accordion,
} as ComponentMeta<typeof Accordion>

export const Default: ComponentStoryObj<typeof Accordion> = {
  args: {
    contents: [
      {
        label: 'Q.ボーナス払い 新規登録および増額申し込み受付終了について知りたい', // 仮文言である可能性が高いため、多言語対応を行わない
        content:
          '新しいサービスへの刷新に伴い、ボーナス・分割払いの新規登録の申し込みおよび利用可能枠増額の申し込み受付は7月12日（火）をもちまして終了しました。',
      },
      {
        label: 'Q.ボーナス払い 新規登録および増額申し込み受付終了について知りたい',
        content:
          '新しいサービスへの刷新に伴い、ボーナス・分割払いの新規登録の申し込みおよび利用可能枠増額の申し込み受付は7月12日（火）をもちまして終了しました。',
      },
      {
        label: 'Q.ボーナス払い 新規登録および増額申し込み受付終了について知りたい',
        content:
          '新しいサービスへの刷新に伴い、ボーナス・分割払いの新規登録の申し込みおよび利用可能枠増額の申し込み受付は7月12日（火）をもちまして終了しました。',
      },
    ],
  },
  storyName: 'Default',
}
