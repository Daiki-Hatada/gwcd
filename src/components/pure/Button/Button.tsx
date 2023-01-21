import { CircularProgress } from '@mui/material'
import classNames from 'classnames'
import { useMemo } from 'react'

import { FlexBox, Icon } from '..'
import styles from './Button.module.scss'

import type { ButtonProps } from './Button.types'

const Button = (props: ButtonProps) => {
  const {
    className,
    theme = 'primary',
    loading,
    iconName,
    size = 'medium',
    variant = 'fill',
    children,
    fullWidth,
    ...rest
  } = props

  const iconColor = useMemo(() => {
    if (variant === 'fill') {
      return '--text-complementary'
    } 
      switch (theme) {
        case 'primary':
          return '--button-primary'
        case 'danger':
          return '--button-danger'
        case 'success':
          return '--button-success'
        default:
          return '--button-primary'
      }
    
  }, [theme, variant])

  if (loading) return <CircularProgress size={24} />
  return (
    <button
      type='button'
      className={classNames(styles[size], styles[`${theme}-${variant}`], className, fullWidth && styles.fullwidth)}
      {...rest}
    >
      <span>
        {iconName ? (
          <FlexBox flexDirection='row' gap="0.5rem" alignItems="center">
            <Icon iconName={iconName} color={iconColor} size={size} />
            <span>{children}</span>
          </FlexBox>
        ) : (
          children
        )}
      </span>
    </button>
  )
}

export default Button
