import classNames from 'classnames'
import { FC } from 'react'

import styles from './Card.module.scss'

import type { CardProps } from './Card.types'

const Card: FC<CardProps> = (props) => {
  const {
    className = '',
    children,
    theme,
    withShadow = false,
    hoverable = false,
    clickable = false,
    maxHeight,
    padding,
    style,
    onClick,
    fullWidth,
  } = props
  const cardStyle = clickable ? styles.clickable : styles.card
  const paddingStyle = padding && styles[`padding--${padding}`]
  const backgroundStyle = theme && styles[`theme--${theme}`]
  const hoverStyle = hoverable && theme && styles[`hoverable--${theme}`]
  const heightStyle = maxHeight && styles['card-max-hight']
  const shadowStyle = withShadow && styles.shadow
  const widthStyle = fullWidth && styles.fullwidth
  return (
    <div
      className={classNames(
        cardStyle,
        backgroundStyle,
        hoverStyle,
        shadowStyle,
        paddingStyle,
        heightStyle,
        widthStyle,
        className,
      )}
      style={{ ...style, maxHeight }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Card
