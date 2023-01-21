import classNames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'

import { useClientSideValidator } from '../../../hooks/useClientSideValidator'
import { Card, Fade, Icon, Typography } from '../../pure'
import styles from './Modal.module.scss'
import { ModalProps } from './Modal.types'

const Modal: React.FC<ModalProps> = ({
  open,
  title,
  onClose,
  children,
  padding = 'medium',
  keepMounted,
  width = 'default',
}) => {
  const { isClientSide } = useClientSideValidator()
  if (!isClientSide) return null
  return ReactDOM.createPortal(
    <Fade show={open} keepMounted={keepMounted}>
      <div onClick={onClose} className={styles.backdrop} />
      <Card
        theme="background"
        fullWidth={false}
        padding={padding}
        className={classNames(styles.modal, styles[width])}
      >
        {(onClose || title) && (
          <div className={styles.header}>
            {typeof title === 'string' ? (
              <Typography weight="bold" size="large">
                {title}
              </Typography>
            ) : (
              title
            )}
            {onClose && <Icon className={styles.icon} size="small" onClick={onClose} iconName="close" />}
          </div>
        )}
        {children}
      </Card>
    </Fade>,
    document.body,
  )
}

export default Modal
