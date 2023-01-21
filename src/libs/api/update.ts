import { collection, doc, updateDoc } from 'firebase/firestore'

import { BaseModel } from '../../types/BaseModel.types'
import { FirestoreCollectionPath } from '../../types/FirestoreCollectionName.types'
import { db } from '../firebase/clientApp'

type Props<T extends BaseModel> = {
  path: FirestoreCollectionPath
  isT: (value: unknown) => value is T
} & (
  | {
      inputData: Omit<T, 'updatedAt'>
    }
  | {
      partialInputData: Omit<Partial<T>, 'id'>
      before: T
    }
)

export const update = async <T extends BaseModel>({ path, isT, ...rest }: Props<T>): Promise<T> => {
  const now = Date.now()
  const { id, createdAt, ...data } =
    'inputData' in rest
      ? {
          ...rest.inputData,
          updatedAt: now,
        }
      : {
          ...rest.before,
          ...rest.partialInputData,
          updatedAt: now,
        }

  const collectionRef = collection(db, path)
  await updateDoc(doc(collectionRef, id), data)
  const updatedObject = {
    id,
    ...data,
    createdAt,
  }
  if (!isT(updatedObject)) throw new Error('Invalid data found.')
  return updatedObject
}
