import classNames from 'classnames'
import { memo, FC, useId } from 'react'

import { Icon } from '..'
import styles from './Checkbox.module.scss'

import type { CheckboxProps } from './Checkbox.types'

const Checkbox: FC<CheckboxProps> = ({ className, labelText, explanation, checked, onChange }) => {
  const id = useId()
  return (
    <>
      <label htmlFor={id} className={classNames(styles.container, className)}>
        <span>{checked ? <Icon iconName='checked' /> : <Icon iconName='unchecked' />}</span>
        <span>{labelText}</span>
        <input id={id} type='checkbox' checked={checked} onChange={onChange} />
      </label>
      {explanation && <div className={`${styles.explanation}`}>{explanation}</div>}
    </>
  )
}

export default memo(Checkbox)
