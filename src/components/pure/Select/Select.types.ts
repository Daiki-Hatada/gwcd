export type Option = {
  name: string
  value: string | number | undefined
}

export type SelectProps = {
  width?: number
  initialOption?: Option
  options: Option[]
  label?: string
  explanation?: string
} & JSX.IntrinsicElements['select']
