import { Table as MaterialTable, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import classNames from 'classnames'

import { getNestValue, RecursiveRecord } from '../../../types/RecursiveObject'
import styles from './Table.module.scss'
import { TableProps } from './Table.types'

const TABLE_MAX_ROW = 50

const Table = <T extends RecursiveRecord>({
  list,
  cellList,
  uniqueKey,
  rowProps,
  maxRows = TABLE_MAX_ROW,
  showEmptyRow,
  ...tableProps
}: TableProps<T>) => {
  const emptyRows = maxRows - list.length
  return (
    <TableContainer>
      <MaterialTable {...tableProps} className={classNames(styles.table, tableProps.className)}>
        <TableHead>
          <TableRow {...rowProps} onClick={undefined}>
            {cellList.map(({ Component: _, ...cell }, index) => (
              <TableCell {...cell} key={index}>
                {cell.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <TableRow
              {...rowProps}
              onClick={() => {
                rowProps?.onClick?.(row)
              }}
              key={String(row[uniqueKey])}
            >
              {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
              {cellList.map(({ id, Component = ({ cellValue }) => <>{cellValue}</>, ...cell }, index) => (
                <TableCell {...cell} key={index}>
                  <Component row={row} cellValue={id ? getNestValue(row, id) : null} />
                </TableCell>
              ))}
            </TableRow>
          ))}
          {showEmptyRow && emptyRows > 0 && (
            <TableRow>
              <TableCell
                colSpan={cellList.length}
                style={{
                  height: (tableProps.size === 'small' ? 48 : 53) * emptyRows,
                  //  1行の高さを決めている、48 53と決め打ちしているが、muiのサンプルで採用されている方法であるため、問題はない？
                }}
              />
            </TableRow>
          )}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  )
}

export default Table
