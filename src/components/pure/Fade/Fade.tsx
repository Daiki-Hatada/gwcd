import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

import styles from './Fade.module.scss'
import { FadeProps } from './Fade.types'

const Fade: React.FC<FadeProps> = ({ show, children, addEventListener, keepMounted }) => {
  const [afterFadeout, setAfterFadeout] = useState(true)

  useEffect(() => {
    if (show) setAfterFadeout(false)
  }, [show])

  if (!keepMounted && afterFadeout) return null

  return (
    <>
      {!afterFadeout && (
        <>
          <div
            className={classNames(show && styles['fade-in'])}
            onAnimationStart={addEventListener ? () => addEventListener('in', 'start') : undefined}
            onAnimationEnd={addEventListener ? () => addEventListener('in', 'end') : undefined}
          />
          <div
            className={classNames(!show && styles['fade-out'])}
            onAnimationStart={addEventListener ? () => addEventListener('out', 'start') : undefined}
            onAnimationEnd={() => {
              addEventListener?.('out', 'end')
              setAfterFadeout(true)
            }}
          />
        </>
      )}
      <div
        className={classNames(
          show ? styles['fade-in'] : styles['fade-out'],
          keepMounted && afterFadeout && styles.invisible,
        )}
      >
        {children}
      </div>
    </>
  )
}
export default Fade
