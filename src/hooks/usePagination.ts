import { useCallback, useEffect, useMemo, useState } from 'react'

import { useLoadingMutator } from '../globalStates/loading'
import { listWithPagination, ListWithPaginationArgs, ListWithPaginationReturn } from '../utils/listWithPagination'

export const usePagination = <T extends { id: string }>({
  fetch,
  limit = 10,
  orderBy,
  usingLoader = true,
}: { usingLoader?: boolean } & ListWithPaginationArgs<T>) => {
  const { setLoading } = useLoadingMutator()
  // 飛んだページを渡されると困るのでこっちで管理
  const [page, setPage] = useState<number>(0)
  const [cache, setCache] = useState<T[]>([])
  const [paging, setPaging] = useState<ListWithPaginationReturn<T>>()

  const clearCacheAndFetchInitially = useCallback(() => {
    setPage(0)
    setCache([])
    listWithPagination({ limit, fetch, orderBy })
      .then((response) => {
        setPaging(response)
      })
      .catch(console.error)
  }, [fetch, limit, orderBy])

  useEffect(() => {
    clearCacheAndFetchInitially()
  }, [clearCacheAndFetchInitially])

  useEffect(() => {
    if (!paging) return
    setCache((prevCache) => [...prevCache, ...paging.result])
  }, [paging])

  const nextPage = useMemo(() => {
    if (cache.length >= (page + 1) * limit + 1) return () => setPage((prevState) => prevState + 1)
    if (!paging?.next) return
    return async () => {
      if (!paging.next) return
      setLoading(true)
      await paging.next().then(setPaging).catch(console.error)
      setPage((prevPage) => prevPage + 1)
      setLoading((prev) => (usingLoader ? false : prev))
    }
  }, [cache.length, limit, page, paging, setLoading, usingLoader])

  const prevPage = useMemo(() => {
    if (page - 1 < 0) return
    return () => setPage((prevPage) => prevPage - 1)
  }, [page])

  const list = useMemo(() => cache.slice(page * limit, page * limit + limit), [cache, page, limit])

  const reFetch = useCallback(async () => {
    if (!paging) return
    const result = await paging.reFetch()
    setCache((prev) =>
      prev
        .map((prevItem) => result.find(({ id }) => id === prevItem.id) || prevItem)
        .filter((cache) => {
          // 現在のぺージで表示されているにも関わらず、paging.reFetchで取れなかったものを排除する
          const listTarget = list.find(({ id }) => cache.id === id)
          if (!listTarget) return true // 現在のぺージにないため無視
          return result.find(({ id }) => id === cache.id)
        }),
    )
  }, [paging, list])

  return {
    list,
    nextPage,
    prevPage,
    page,
    reFetch,
    clearCacheAndFetchInitially,
  }
}
