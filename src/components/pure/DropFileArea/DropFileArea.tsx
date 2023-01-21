import classNames from 'classnames'
import React, { useId, useState } from 'react'
import { Trans } from 'react-i18next'

import { Icon } from '..'
import styles from './DropFileArea.module.scss'
import { DropFileAreaProps } from './DropFileArea.types'

const DropFileArea: React.FC<DropFileAreaProps> = ({ onDrop, children, ...rootProps }) => {
  const [dragging, setDragging] = useState(false)
  const fileInputId = useId()
  return (
    <div
      {...rootProps}
      onDragOver={(event) => {
        event.preventDefault()
      }}
      onDragEnter={() => {
        setDragging(true)
      }}
      onDragLeave={(event) => {
        event.preventDefault()
        setDragging(false)
      }}
      onDrop={(event) => {
        event.stopPropagation()
        event.preventDefault()
        setDragging(false)
        onDrop(event.dataTransfer.files)
      }}
      className={classNames(styles.root, rootProps.className, dragging ? styles['drag-enter'] : styles['drag-leave'])}
    >
      <div>
        <Icon className={styles.icon} iconName="upload" color={dragging ? 'var(--primary)' : 'var(--gray-light)'} />
      </div>
      {children || (
        <div className={styles['children-container']}>
          <Trans
            i18nKey="constants.EMAIL"
            components={{
              Text: <div />,
              LinkText: <label htmlFor={fileInputId} />,
            }}
          />
          <input
            type="file"
            onChange={({ target }) => {
              if (!target.files) return
              onDrop(target.files)
            }}
            id={fileInputId}
          />
        </div>
      )}
    </div>
  )
}

export default DropFileArea
