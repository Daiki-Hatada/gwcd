import React, { FC, useMemo } from 'react'

import { Footer, Header } from '../..'
import { Breadcrumbs } from '../../compound'
import { FlexBox } from '../../pure'
import styles from './MainLayout.module.scss'
import { MainLayoutProps } from './MainLayout.types'

const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children, maxWidth = '70rem', padding, backgroundColor = 'background', pathWithTitles = [] } = props
  const mainChildStyle = useMemo(() => ({ maxWidth }), [maxWidth])
  const mainStyle = useMemo(
    () => ({ backgroundColor: `var(--${backgroundColor})`, padding }),
    [backgroundColor, padding],
  )

  return (
    <div className={styles.root}>
      <Header />
      <main style={mainStyle} className={styles.main}>
        <FlexBox style={{ width: '100%' }}>
          <Breadcrumbs style={{ backgroundColor }} pathWithTitles={pathWithTitles} />
        </FlexBox>
        <div style={mainChildStyle}>{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
