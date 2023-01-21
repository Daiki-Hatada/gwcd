import classNames from 'classnames'

import { COLOR } from '../../../constants/color'
import styles from './Typography.module.scss'

import type { TypographyProps } from './Typography.types'

const Typography = (props: TypographyProps) => {
  const { children, size = 'medium', color = COLOR.TEXT, style, className, align, weight, whiteSpace } = props
  return (
    <span
      className={classNames(styles.root, styles[size], className)}
      style={{ color: `var(--${color})`, textAlign: align, fontWeight: weight, whiteSpace, ...style }}
    >
      {children}
    </span>
  )
}

export default Typography
