import classNames from 'classnames'
import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react'

import { Fade, Icon, Typography } from '..'
import { useClientSideValidator } from '../../../hooks/useClientSideValidator'
import styles from './DropDown.module.scss'
import { DropDownProps } from './DropDown.types'

const DropDown: FC<DropDownProps> = ({ contents, toggleIconName = 'dotMenu', position = 'center' }) => {
  const [isShown, setIsShown] = useState(false)
  const clickDetectorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleCloseContent = (e: MouseEvent) => {
      const element = clickDetectorRef.current
      if (!isShown || !(e.target instanceof Node) || element?.contains(e.target)) return
      setIsShown(false)
    }

    window.addEventListener('click', handleCloseContent)
    return () => window.removeEventListener('click', handleCloseContent)
  }, [isShown, setIsShown])

  const [menuPosition, setMenuPosition] = useState<Pick<CSSProperties, 'left' | 'top'>>()
  const { isClientSide } = useClientSideValidator()
  if (!isClientSide) return null
  const onEachContentClicked = (
    event: React.MouseEvent<HTMLButtonElement>,
    onClick: DropDownProps['contents'][number]['onClick'],
  ) => {
    event.preventDefault()
    onClick?.(event)
    setIsShown(false)
  }
  return (
    <div ref={clickDetectorRef} className={styles['menu-container']}>
      <button
        type='button'
        className={styles.toggle}
        onClick={(event) => {
          setMenuPosition({
            top: event.clientY,
            left: event.clientX,
          })
          setIsShown(!isShown)
        }}
      >
        <Icon iconName={toggleIconName} color='brand-darker' />
      </button>
      <Fade show={isShown}>
        <div className={classNames(styles.primary, styles[position])} style={menuPosition}>
          <div className={styles.menu}>
            {contents.map((content, index) => (
              <button
                type='button'
                className={styles['menu-button']}
                key={index}
                onClick={(event) => onEachContentClicked(event, content.onClick)}
              >
                <Typography>{content.label}</Typography>
                {content.iconName && (
                  <Icon
                    size="small"
                    iconName={content.iconName}
                    color='brand-darker'
                    className={styles['menu-icon']}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  )
}
export default DropDown
