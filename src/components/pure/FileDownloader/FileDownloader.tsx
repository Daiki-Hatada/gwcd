import React from 'react'

import { Icon } from '..'
import styles from './FileDownloader.module.scss'
import { FileDownloaderProps } from './FileDownloader.types'

const FileDownloader: React.FC<FileDownloaderProps> = ({ url, fileName, iconName }) => (
    <a className={styles.root} href={url} download>
      <div className={styles.container}>
        <Icon iconName={iconName || 'file'} className={styles.icon} />
      </div>
      {fileName && <div className={styles.filename}>{fileName}</div>}
    </a>
  )

export default FileDownloader
