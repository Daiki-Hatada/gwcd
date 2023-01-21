import { CircularProgress } from '@mui/material'
import classNames from 'classnames'
import React, { useEffect } from 'react'

import { FlexBox } from '../..'
import { useLoadingState } from '../../../globalStates/loading'
import styles from './Loader.module.scss'

const Loading: React.FC = () => {
  const loading = useLoadingState()

  useEffect(() => {
    if (!loading || !window) return
    const onBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      return null
    }
    window.addEventListener('beforeunload', onBeforeUnload)
    return () => window.removeEventListener('beforeunload', onBeforeUnload)
  }, [loading])

  return (
    <FlexBox
      justifyContent='center'
      alignItems='center'
      className={classNames(styles.root, loading ? styles.visible : styles.invisible)}
    >
      <CircularProgress color='inherit' />
    </FlexBox>
  )
}

export default Loading
