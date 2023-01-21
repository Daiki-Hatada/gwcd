import { ReactNode } from 'react'

export type PaginationProps = {
  total?: number
  onChangePage: (event: React.ChangeEvent<unknown>, page: number) => void
  page: number
}

export type PaginationItemProps = {
  selected?: boolean
  children?: ReactNode
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
