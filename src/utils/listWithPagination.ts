import { firestore } from 'firebase-admin'
import { documentId, orderBy as firestoreOrderBy, QueryConstraint, startAfter } from 'firebase/firestore'

import { QueryHelperProps } from './queryHelper'

import OrderByDirection = firestore.OrderByDirection

export type ListWithPaginationArgs<T> = {
  limit?: number
  orderBy?: {
    fieldName: keyof T & string
    directionStr?: OrderByDirection
  }[]
  fetch: (option: QueryHelperProps) => Promise<T[]>
}

export type ListWithPaginationReturn<T extends { id: string }> = {
  next?: () => Promise<ListWithPaginationReturn<T>>
  result: T[]
  reFetch: () => Promise<T[]>
}

export async function listWithPagination<T extends { id: string }>(
  args: ListWithPaginationArgs<T>,
  prevResult?: T[],
): Promise<ListWithPaginationReturn<T>> {
  const { limit = 1000, fetch, orderBy = [] } = args
  const queryConstraints: QueryConstraint[] = []
  orderBy.forEach(({ fieldName, directionStr }) => queryConstraints.push(firestoreOrderBy(fieldName, directionStr)))
  queryConstraints.push(firestoreOrderBy(documentId()))

  if (prevResult)
    queryConstraints.push(
      startAfter(
        ...orderBy.map(({ fieldName }) => prevResult[prevResult.length - 1][fieldName]),
        prevResult[prevResult.length - 1].id,
      ),
    )
  const reFetch = () =>
    fetch({
      limit,
      queryConstraints,
    })
  const result = await reFetch()
  if (result.length === limit) return { next: () => listWithPagination(args, result), result, reFetch }

  return { result, reFetch }
}
