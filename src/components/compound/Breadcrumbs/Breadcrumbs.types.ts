import { CLIENT_PATH } from '../../../constants/clientPath'

export type ClientPath = (typeof CLIENT_PATH)[keyof typeof CLIENT_PATH]['path']

export type PathWithTitle = {
  path: ClientPath
  title: string
}

export type BreadcrumbsProps = {
  style?: JSX.IntrinsicElements['div']['style']
  pathWithTitles: PathWithTitle[]
}
