import classNames from 'classnames'
import { forwardRef, useId } from 'react'

import styles from './RadioButton.module.scss'

import type { RadioButtonProps } from './RadioButton.types'

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>((props, ref) => {
  const {
    className,
    name,
    value,
    theme = 'primary',
    defaultChecked,
    checked,
    inputStyle,
    labelStyle,
    children,
    onChange,
    disabled,
    variant = 'text',
  } = props

  const id = useId()

  return (
    <label htmlFor={id} className={classNames(styles[theme], styles[variant], className)} style={labelStyle}>
      <input
        id={id}
        type='radio'
        name={name}
        checked={checked}
        value={value}
        defaultChecked={defaultChecked}
        style={inputStyle}
        ref={ref}
        onChange={onChange}
        disabled={disabled}
      />
      <span>{children}</span>
    </label>
  )
})

const [displayName] = Object.keys({ RadioButton })
RadioButton.displayName = displayName

export default RadioButton
