import { forwardRef } from 'react'

import styles from './ToggleSwitch.module.scss'

import type { ToggleSwitchProps } from './ToggleSwitch.types'

const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>((props, ref) => {
  const { id, onChange, checked } = props
  return (
    <label htmlFor={id} className={styles.primary}>
      <input id={id} type='checkbox' onChange={onChange} ref={ref} className={styles.input} checked={checked} />
      <span className={styles.toggle} />
    </label>
  )
})

const [displayName] = Object.keys({ ToggleSwitch })
ToggleSwitch.displayName = displayName

export default ToggleSwitch
