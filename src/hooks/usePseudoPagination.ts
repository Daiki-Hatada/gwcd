import { useMemo } from 'react'

type Args<T> = {
  page: number
  data: T[]
  limit: number
}

export const usePseudoPagination = <T>({ page, data, limit }: Args<T>) =>
  useMemo(() => {
    const offset = page * limit
    return data.slice(offset, offset + limit)
  }, [data, page, limit])
