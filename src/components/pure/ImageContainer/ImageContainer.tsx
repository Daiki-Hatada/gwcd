import classNames from 'classnames'
import styles from './ImageContainer.module.scss'

import type { ImageContainerProps } from './ImageContainer.types'

const ImageContainer = ({ size = 'large', imagePath, shape = 'square', className }: ImageContainerProps) => (
    <div className={classNames(styles[size], className)}>
      <div className={`${styles[shape]}`} style={{ backgroundImage: `url(${imagePath})` }} />
    </div>
  )

export default ImageContainer
