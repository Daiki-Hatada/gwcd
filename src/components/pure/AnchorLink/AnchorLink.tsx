import Link from 'next/link'
import { FC } from 'react'

import styles from './AnchorLink.module.scss'

import type { AnchorLinkProps } from './AnchorLink.types'

const AnchorLink: FC<AnchorLinkProps> = ({ children, href, style }) => (
    <Link href={href}>
      <a className={styles.anchor} style={style}>
        {children}
      </a>
    </Link>
  )

export default AnchorLink
