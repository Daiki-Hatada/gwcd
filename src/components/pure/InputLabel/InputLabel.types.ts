// 入力欄の
import { ReactNode } from 'react'

export type InputLabelProps = {
  label: ReactNode // 型がstring | numberの場合は<Typography weight={bold}>{label}</Typography>で表示する
  required?: JSX.IntrinsicElements['input']['required'] // trueの場合は【必須】と表示する
}
