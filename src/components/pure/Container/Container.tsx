import { FC } from 'react'

import styles from './Container.module.scss'
import { ContainerProps } from './Container.types'

const Container: FC<ContainerProps> = (props) => {
  const { children, padding = 'medium', gap = 'medium' } = props
  const rootClassName = `
    ${styles.primary} 
    ${styles[`padding-${padding}`]}
    ${styles[`gap-${gap}`]}
    `
  return <div className={rootClassName}>{children}</div>
}

export default Container
