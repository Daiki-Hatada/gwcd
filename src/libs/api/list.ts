import {
  collection,
  doc,
  getDocs,
  limit as firestoreLimit,
  query,
  QueryConstraint,
  startAfter,
} from 'firebase/firestore'

import { BaseModel } from '../../types/BaseModel.types'
import { FirestoreCollectionPath } from '../../types/FirestoreCollectionName.types'
import { safeWhere as where } from '../../utils/safeWhere'
import { db } from '../firebase/clientApp'

type Props<T> = {
  path: FirestoreCollectionPath
  isT: (value: unknown) => value is T
  options: Options
}

export type Options = {
  limit?: number
  queryConstraints?: QueryConstraint[]
  lastVisibleId?: string
  includesDeleted?: boolean
}

export const list = async <T extends BaseModel>({ path, isT, options }: Props<T>): Promise<T[]> => {
  const { limit = 100, lastVisibleId, includesDeleted = false, queryConstraints = [] } = options || {}
  const collectionRef = collection(db, path)
  const assembledQueryConstraints = queryConstraints
  if (!includesDeleted) {
    assembledQueryConstraints.push(where<T, 'deletedAt'>('deletedAt', '==', null))
  }
  if (lastVisibleId) {
    const lastVisibleRef = doc(collectionRef, lastVisibleId)
    assembledQueryConstraints.push(startAfter(lastVisibleRef))
  }
  const q = query(collectionRef, ...assembledQueryConstraints, firestoreLimit(limit))
  const { docs } = await getDocs(q)
  const data = docs.map((doc) => {
    const datum = {
      id: doc.id,
      ...doc.data(),
    }
    if (!isT(datum)) throw new Error('Invalid data found.')
    return datum
  })
  return data
}
