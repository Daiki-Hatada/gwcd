import usePagination from '@mui/material/usePagination'
import * as React from 'react'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { Icon } from '../../pure'
import styles from './Pagination.module.scss'
import { PaginationItemProps, PaginationProps } from './Pagination.types'

const PaginationItem: React.FC<PaginationItemProps> = (props: PaginationItemProps) => {
  const { selected, children, onClick, disabled } = props

  return (
    <button
      type='button'
      className={`${disabled || selected ? styles.active : styles.inactive}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
  const { total, onChangePage, page } = props
  const { items } = usePagination({
    page,
    count: total || page,
    siblingCount: 1,
    onChange: onChangePage,
  })
  const { t } = useTranslation()

  const typeToIcon = useMemo(
    () => ({
      previous: (
        <>
          <Icon size="small" iconName='previous' />
          <p style={{ padding: '0 0.5rem' }}>{t('previous')}</p>
        </>
      ),
      next: (
        <>
          <p style={{ padding: '0 0.5rem' }}>{t('next')}</p>
          <Icon size="small" iconName='next' />
        </>
      ),
    }),
    [t],
  )

  const children = useMemo(
    () =>
      items.map(({ page, type, selected, onClick, disabled }, i) => (
        <li key={i}>
          {(type === 'start-ellipsis' || type === 'end-ellipsis') && (
            <PaginationItem disabled>
              <Icon iconName="ellipsis" />
            </PaginationItem>
          )}
          {type === 'page' && (
            <PaginationItem selected={selected} onClick={onClick} disabled={disabled}>
              {page}
            </PaginationItem>
          )}
          {((type === 'previous' && page !== 0) || (type === 'next' && ((total && page !== total + 1) || !total))) && (
            <PaginationItem onClick={onClick}>{typeToIcon[type]}</PaginationItem>
          )}
        </li>
      )),
    [items, total, typeToIcon],
  )

  return (
    <nav>
      <ul className={styles.container}>{children}</ul>
    </nav>
  )
}

export default Pagination
