import { CSSProperties, ReactNode } from 'react'

import { Color } from '../../../types/Color.types'
import { PathWithTitle } from '../../compound/Breadcrumbs/Breadcrumbs.types'

export type MainLayoutProps = {
  children: ReactNode
  maxWidth?: CSSProperties['maxWidth']
  padding?: CSSProperties['padding']
  backgroundColor?: Color
  pathWithTitles?: PathWithTitle[]
}
