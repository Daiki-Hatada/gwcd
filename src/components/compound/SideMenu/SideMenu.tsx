import classNames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'

import { useClientSideValidator } from '../../../hooks/useClientSideValidator'
import { Icon } from '../../pure'
import { FlexBox } from '../../pure/FlexBox'
import styles from './SideMenu.module.scss'
import { SideMenuProps } from './SideMenu.types'

const SideMenu: React.FC<SideMenuProps> = ({ direction, open, className, children, footer, onClose }) => {
  const { isClientSide } = useClientSideValidator()
  if (!globalThis.window || !isClientSide) return null

  return ReactDOM.createPortal(
    <>
      {open && <div onClick={onClose} className={classNames(styles.backdrop, className)} />}
      <div
        className={classNames(
          styles['side-menu'],
          className,
          styles[direction || 'right'],
          open ? '' : styles.hide,
        )}
      >
        {onClose && (
          <FlexBox padding="0.75rem" justifyContent="flex-end">
            <Icon
              onClick={onClose}
              className={styles['close-icon']}
              iconName="close"
              color="background"
              size="large"
            />
          </FlexBox>
        )}
        <div className={styles.content}>{children}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </>,
    document.body,
  )
}
export default SideMenu
