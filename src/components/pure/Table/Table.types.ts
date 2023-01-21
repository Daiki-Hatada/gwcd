import { TableCellProps, TableProps as MaterialTableProps, TableRowProps } from '@mui/material'
import React from 'react'

import { Primitive, RecursivelyPickedKey, RecursiveRecord } from '../../../types/RecursiveObject'

export type CellProps<T extends RecursiveRecord> = {
  id?: RecursivelyPickedKey<T>
  label?: string
  Component?: React.FC<{ row: T; cellValue: Primitive }>
} & TableCellProps

export type TableProps<T extends RecursiveRecord> = {
  list: Array<T>
  cellList: CellProps<T>[]
  uniqueKey: keyof T
  rowProps?: Omit<TableRowProps, 'onClick'> & { onClick?: (row: T) => void }
  maxRows?: number
  showEmptyRow?: boolean
} & MaterialTableProps
