import classNames from 'classnames'
import { forwardRef, memo, useId } from 'react'

import { FlexBox, Typography, InputLabel } from '..'
import styles from './Input.module.scss'
import { InputProps } from './Input.types'

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    className,
    theme = 'primary',
    prefix,
    suffix,
    error,
    gap = '1rem',
    required,
    explanation,
    ...rest
  } = props

  const id = useId()

  return (
    <label htmlFor={id} className={classNames(styles[error ? 'error' : theme], className)}>
      <Typography color={error ? 'error' : undefined}>
        {/* TODOエラーをInputLabelに渡す */}
        <InputLabel label={label} required={required} />
      </Typography>
      <FlexBox width='100%' alignItems='center' gap={gap} alignContent='stretch'>
        {prefix && <span>{prefix}</span>}
        <input
          id={id}
          {...rest}
          ref={ref}
          autoComplete='off'
          autoCorrect='off'
          autoCapitalize='off'
          spellCheck='false'
        />
        {suffix && <span>{suffix}</span>}
      </FlexBox>
      {explanation && <span className={styles.explanation}>{explanation}</span>}
      {error && (
        <Typography color="error" style={{ whiteSpace: 'nowrap' }}>
          {error}
        </Typography>
      )}
    </label>
  )
})

const [displayName] = Object.keys(Input)
Input.displayName = displayName

export default memo(Input)
