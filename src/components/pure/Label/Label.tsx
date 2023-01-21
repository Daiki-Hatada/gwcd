import classNames from 'classnames'
import React, { CSSProperties, useEffect, useState } from 'react'

import { colorToVar, getFontColor } from '../../../utils/colors'
import styles from './Label.module.scss'
import { LabelProps } from './Label.types'

const Label: React.FC<LabelProps> = ({
  children,
  variant = 'fill',
  color = 'text',
  corner = 'round',
  padding = 'default',
  ...otherProps
}) => {
  const [style, setStyle] = useState<CSSProperties>({})

  useEffect(() => {
    if (typeof color === 'string') {
      if (!globalThis.window) return
      const textColor = variant === 'fill' ? getFontColor(colorToVar(color)) || '#000' : color

      return setStyle({
        color: textColor,
        borderColor: variant === 'fill' ? undefined : colorToVar(color),
        backgroundColor: variant === 'fill' ? colorToVar(color) : undefined,
      })
    }
    const [backgroundColor, textColor] = [color.backgroundColor, color.text]

    setStyle({
      color: colorToVar(textColor),
      borderColor: variant === 'fill' ? undefined : colorToVar(backgroundColor),
      backgroundColor: variant === 'fill' ? colorToVar(backgroundColor) : undefined,
    })
  }, [color, variant])

  return (
    <span
      {...otherProps}
      style={{ ...style, ...otherProps.style }}
      className={classNames(
        styles[variant],
        styles[corner],
        otherProps.className,
        padding !== 'none' && styles[`padding-${padding}`],
      )}
    >
      {children}
    </span>
  )
}

export default Label
