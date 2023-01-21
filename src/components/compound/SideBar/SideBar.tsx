import { Tooltip } from '@mui/material'
import classNames from 'classnames'
import React, { FC } from 'react'

import { Icon } from '../../pure'
import styles from './SideBar.module.scss'
import { SideBarProps } from './SideBar.types'

const SideBar: FC<SideBarProps> = ({ itemSets, open, children, ...props }) => (
    <div {...props} className={classNames(styles.root, props.className, open ? styles.open : styles.close)}>
      {itemSets.map(({ items, title, ...itemGroupProps }, i) => (
        <div key={i} {...itemGroupProps}>
          <div className={styles.title}>{title}</div>
          {items.map(({ icon, label, ...itemProps }, j) => (
            <div key={j} {...itemProps} className={classNames(styles.item, styles.button, itemProps.className)}>
              {icon && (
                <Tooltip title={open ? '' : label} placement='right'>
                  <div className={styles.icon}>
                    <Icon color="#fff" iconName={icon} />
                  </div>
                </Tooltip>
              )}
              <span className={styles.label}> {label}</span>
            </div>
          ))}
        </div>
      ))}
      {children}
    </div>
  )

export default SideBar
