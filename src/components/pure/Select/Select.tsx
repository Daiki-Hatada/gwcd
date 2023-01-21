import { forwardRef, useId } from 'react'

import { FlexBox } from '../FlexBox'
import { InputLabel } from '../InputLabel'
import styles from './Select.module.scss'

import type { SelectProps } from './Select.types'

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { width, initialOption, options, label, explanation, required, ...selectProps } = props
  const { style, ...selectRestProps } = selectProps
  const id = useId()
  return (
    <FlexBox flexDirection='column' gap="0.25rem">
      <FlexBox>
        {label && (
          <label htmlFor={id}>
            <InputLabel label={label} required={required} />
          </label>
        )}
      </FlexBox>
      <select ref={ref} id={id} className={styles.select} style={{ width, ...style }} {...selectRestProps}>
        {initialOption && (
          <option hidden value={initialOption.value}>
            {initialOption.name}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      {explanation && <span className={styles.explanation}>{explanation}</span>}
    </FlexBox>
  )
})

const [displayName] = Object.keys({ Select })
Select.displayName = displayName

export default Select
