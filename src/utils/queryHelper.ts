import { CollectionReference, doc, limit as firestoreLimit, QueryConstraint, startAfter } from 'firebase/firestore'
import { BaseModel } from '../types/BaseModel.types'
import { safeWhere as where } from './safeWhere'

export type QueryHelperProps = {
  collectionRef?: CollectionReference
  limit?: number
  lastVisibleId?: string
  includesDeleted?: boolean
  queryConstraints?: QueryConstraint[]
}

export const queryHelper = <T extends BaseModel>({
  collectionRef,
  limit,
  lastVisibleId,
  includesDeleted,
  queryConstraints,
}: QueryHelperProps): QueryConstraint[] => {
  const assembledQueryConstraints = queryConstraints || []
  if (!includesDeleted) {
    assembledQueryConstraints.push(where<T, 'deletedAt'>('deletedAt', '==', null))
  }
  if (lastVisibleId && collectionRef) {
    const lastVisibleRef = doc(collectionRef, lastVisibleId)
    assembledQueryConstraints.push(startAfter(lastVisibleRef))
  }
  if (limit !== undefined) {
    assembledQueryConstraints.push(firestoreLimit(limit))
  }
  return assembledQueryConstraints
}
