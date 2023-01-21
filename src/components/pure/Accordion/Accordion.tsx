import classNames from 'classnames'
import React, { useId } from 'react'

import { Icon } from '..'
import styles from './Accordion.module.scss'
import { AccordionProps } from './Accordion.types'

const Accordion: React.FC<AccordionProps> = ({
  contents,
  contentStyle,
  labelStyle,
  iconPosition = 'right',
  iconColor,
  ...otherProps
}) => {
  const id = useId()
  return (
    <div {...otherProps} className={classNames(styles.root, otherProps.className)}>
      {contents.map(({ label, content }, index) => (
        <div key={index}>
          <input id={`${id}${index}`} type="checkbox" className={styles.checkbox} />
          <label
            style={labelStyle}
            htmlFor={`${id}${index}`}
            className={classNames(styles.label, iconPosition === 'right' && styles['right-icon-wrapper'])}
          >
            {iconPosition === 'left' && <Icon color={iconColor} iconName="chevronUp" className={styles.icon} />}
            <div>{label}</div>
            {iconPosition === 'right' && <Icon color={iconColor} iconName="chevronUp" className={styles.icon} />}
          </label>
          <div style={contentStyle} className={styles.content}>
            {content}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
