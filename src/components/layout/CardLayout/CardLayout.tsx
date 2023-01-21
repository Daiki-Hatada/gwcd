import React from 'react'

import { Card, FlexBox, Typography } from '../../pure'
import { MainLayout } from '../MainLayout'
import styles from './CardLayout.module.scss'
import { CardLayoutProps } from './CardLayout.types'

const CardLayout: React.FC<CardLayoutProps> = ({ title, children }) => (
    <MainLayout backgroundColor="gray-light">
      <FlexBox justifyContent="center" alignItems="center" height="100%" margin="0 0 3rem">
        <Card padding="medium" theme="background" className={styles.card}>
          <Typography className={styles.title} align="center" size="larger">
            {title}
          </Typography>
          {children}
        </Card>
      </FlexBox>
    </MainLayout>
  )
export default CardLayout
