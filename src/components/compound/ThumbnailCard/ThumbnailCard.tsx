import classNames from 'classnames'
import Image from 'next/image'
import React, { CSSProperties, useMemo } from 'react'

import { Card, FlexBox, Typography } from '../../pure'
import styles from './ThumbnailCard.module.scss'
import { ThumbnailCardProps } from './ThumbnailCard.types'

const SIZE = {
  large: {
    width: 480,
    height: 270,
  },
  medium: {
    width: 320,
    height: 180,
  },
  small: {
    width: 160,
    height: 90,
  },
} as const

const ThumbnailCard: React.FC<ThumbnailCardProps> = ({ thumbnailUrl, children, size = 'medium', ...cardProps }) => {
  const { width, height } = SIZE[size]
  const imageStyle: CSSProperties = useMemo(
    () => ({
      width,
      height,
    }),
    [width, height],
  )
  const cardStyle: CSSProperties = useMemo(
    () => ({
      width,
      cursor: (cardProps.clickable && cardProps.onClick) || cardProps.clickable ? 'pointer' : 'initial',
      ...cardProps.style,
    }),
    [width, cardProps.clickable, cardProps.onClick, cardProps.style],
  )
  return (
    <Card {...cardProps} style={cardStyle} className={classNames(styles.root, cardProps.className)}>
      <div style={imageStyle} className={styles.image}>
        {thumbnailUrl ? (
          <Image
            draggable={false}
            src={thumbnailUrl}
            width={width}
            height={height}
            objectFit="cover"
            alt="thumbnail"
          />
        ) : (
          <FlexBox height="100%" alignItems="center" justifyContent="center">
            <Typography size="larger" color="gray-lighter">
              No Image
            </Typography>
          </FlexBox>
        )}
      </div>
      <div className={styles.body}>{children}</div>
    </Card>
  )
}
export default ThumbnailCard
