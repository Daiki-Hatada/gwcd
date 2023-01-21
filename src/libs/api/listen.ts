import { collection, onSnapshot, query, QueryConstraint, Unsubscribe, FirestoreError } from 'firebase/firestore'

import { BaseModel } from '../../types/BaseModel.types'
import { FirestoreCollectionPath } from '../../types/FirestoreCollectionName.types'
import { db } from '../firebase/clientApp'

type Props<T extends BaseModel> = {
  path: FirestoreCollectionPath
  queryConstraints: QueryConstraint[]
  callback?: (data: T[]) => void
  onError?: (error: FirestoreError) => void
  isT: (value: unknown) => value is T
}

export const listen = <T extends BaseModel>({
  path,
  queryConstraints,
  callback,
  onError,
  isT,
}: Props<T>): Unsubscribe => {
  const collectionRef = collection(db, path)
  const q = query(collectionRef, ...queryConstraints)
  const unsubscribe = onSnapshot(q, {
    next: (snapshot) => {
      const data = snapshot.docs.map(({ id, data }) => {
        const datum = {
          id,
          ...data(),
        }
        if (!isT(datum)) throw new Error('Invalid data found.')
        return datum
      })
      callback?.(data)
    },
    error: onError,
  })
  return unsubscribe
}
