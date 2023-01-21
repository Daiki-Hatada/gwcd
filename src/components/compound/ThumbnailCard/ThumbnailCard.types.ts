import { CardProps } from '../../pure/Card/Card.types'

export type ThumbnailCardProps = {
  thumbnailUrl?: string
  size?: 'large' | 'medium' | 'small'
} & CardProps
