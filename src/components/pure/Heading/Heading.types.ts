export type HeadingProps = {
  children: string
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'larger' | 'large' | 'medium' | 'small' | 'smaller'
  color?: string
  withMargin?: boolean
  style?: JSX.IntrinsicElements['h1']['style']
}
