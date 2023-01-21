import { FirebaseFirestore } from '@firebase/firestore-types'
import { assertFails, assertSucceeds } from '@firebase/rules-unit-testing'
import { FirebaseError } from 'firebase/app'

import { FIRESTORE_COLLECTION_NAME } from '../../../../src/constants/firebase/firestore'
import FirebaseTestProvider from './FirebaseTestProvider'

export type TestFirestoreAllowedArgs = {
  provider: FirebaseTestProvider
  collectionName: typeof FIRESTORE_COLLECTION_NAME[keyof typeof FIRESTORE_COLLECTION_NAME]
  dbs?: FirebaseFirestore[]
  assert?: typeof assertSucceeds | typeof assertFails
}

const getDbs = async (provider: FirebaseTestProvider) => {
  return [
    await provider.getUnauthenticatedClientDB(),
    await provider.getAuthenticatedClientDB(),
    await provider.getAdminClientDB(),
  ]
}

export const testFirestoreGetAllowed = async ({
  dbs,
  collectionName,
  provider,
  assert = assertSucceeds,
}: TestFirestoreAllowedArgs) => {
  const documentId = 'test'
  await provider.getServerDB((context) => context.firestore().collection(collectionName).doc(documentId).set({}))
  await Promise.all(
    (dbs || (await getDbs(provider))).map((db) => assert(db.collection(collectionName).doc(documentId).get())),
  )
}

export const testFirestoreListAllowed = async ({
  provider,
  collectionName,
  dbs,
  assert = assertSucceeds,
}: TestFirestoreAllowedArgs) => {
  await Promise.all((dbs || (await getDbs(provider))).map((db) => assert(db.collection(collectionName).limit(2).get())))
}

export const testFirestoreCreateAllowed = async ({
  provider,
  collectionName,
  dbs,
  assert = assertSucceeds,
  data = {},
}: TestFirestoreAllowedArgs & { data?: object }) => {
  await Promise.all((dbs || (await getDbs(provider))).map((db) => assert(db.collection(collectionName).add(data))))
}

export const testFirestoreUpdateAllowed = async ({
  provider,
  collectionName,
  documentId = 'test',
  dbs,
  assert = assertSucceeds,
  before = {},
  after = {},
}: TestFirestoreAllowedArgs & { documentId?: string; before?: object; after?: object }) => {
  await provider.getServerDB((context) => context.firestore().collection(collectionName).doc(documentId).set(before))
  await Promise.all(
    (dbs || (await getDbs(provider))).map((db) => assert(db.collection(collectionName).doc(documentId).update(after))),
  )
}

export const testFirestoreDeleteAllowed = async ({
  provider,
  collectionName,
  dbs,
  assert = assertSucceeds,
}: TestFirestoreAllowedArgs) => {
  const documentId = 'test'
  await provider.getServerDB((context) => context.firestore().collection(collectionName).doc(documentId).set({}))
  await Promise.all(
    (dbs || (await getDbs(provider))).map((db) => assert(db.collection(collectionName).doc(documentId).delete())),
  )
}

export const isPermissionError = (error: unknown) => {
  if (!(error instanceof FirebaseError)) return false
  return error.code === 'permission-denied'
}
