import { FC, createElement } from 'react'

import styles from './Heading.module.scss'

import type { HeadingProps } from './Heading.types'

const Heading: FC<HeadingProps> = ({
  children,
  headingLevel = 'h1',
  size = 'larger',
  color,
  withMargin = true,
  style,
}) => {
  const headingStyle = withMargin ? styles[`margined-${size}`] : styles[size]
  return createElement(headingLevel, { className: headingStyle, style: { color, ...style } }, children)
}

export default Heading
