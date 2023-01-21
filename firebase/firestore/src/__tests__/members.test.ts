import { FirebaseFirestore } from '@firebase/firestore-types'
import { assertFails } from '@firebase/rules-unit-testing'

import { FIRESTORE_COLLECTION_NAME } from '../../../../src/constants/firebase/firestore'
import { setUpTest } from '../utils/FirebaseTestProvider'
import {
  isPermissionError,
  testFirestoreCreateAllowed,
  testFirestoreDeleteAllowed,
  testFirestoreGetAllowed,
  testFirestoreListAllowed,
} from '../utils/testFirestoreAllowed'

const myUid = 'alice'

const provider = setUpTest('member')

let unAuthDb: FirebaseFirestore
let authDb: FirebaseFirestore
let adminDb: FirebaseFirestore

beforeEach(async () => {
  authDb = await provider.getAuthenticatedClientDB({ uid: myUid })
  unAuthDb = await provider.getUnauthenticatedClientDB()
  adminDb = await provider.getAdminClientDB({ uid: myUid })
})

describe('members', () => {
  const commonTestArgs = {
    provider,
    collectionName: FIRESTORE_COLLECTION_NAME.MEMBERS,
  }
  describe('GET', () => {
    test('ADMINまたはログイン済->成功', () => {
      testFirestoreGetAllowed({ ...commonTestArgs, dbs: [adminDb, authDb] })
    })
    test('未ログイン->失敗', async () => {
      await testFirestoreListAllowed({ ...commonTestArgs, dbs: [unAuthDb], assert: assertFails })
    })
  })
  describe('LIST', () => {
    test('ADMINまたはログイン済->成功', () => {
      testFirestoreListAllowed({ ...commonTestArgs, dbs: [adminDb, authDb] })
    })
    test('未ログイン->失敗', async () => {
      await testFirestoreListAllowed({ ...commonTestArgs, dbs: [unAuthDb], assert: assertFails })
    })
  })
  describe('CREATE', () => {
    test('全て->失敗', async () => {
      await testFirestoreCreateAllowed({ ...commonTestArgs, dbs: [unAuthDb], assert: assertFails })
    })
  })
  describe('UPDATE', () => {
    describe('ADMINまたはログイン済み', () => {
      const setUp = (uid: string) =>
        provider.getServerDB((context) =>
          context.firestore().collection(FIRESTORE_COLLECTION_NAME.MEMBERS).doc(uid).set({}),
        )

      test('自分のもの->成功', async () => {
        await setUp(myUid)
        await Promise.all([
          authDb.collection(FIRESTORE_COLLECTION_NAME.MEMBERS).doc(myUid).update({ test: '1' }),
          adminDb.collection(FIRESTORE_COLLECTION_NAME.MEMBERS).doc(myUid).update({ test: '2' }),
        ])
      })
      test('他人のもの->失敗', async () => {
        const documentId = myUid + 1
        await setUp(documentId)
        expect(
          await authDb
            .collection(FIRESTORE_COLLECTION_NAME.MEMBERS)
            .doc(documentId)
            .update({ test: '1' })
            .catch(isPermissionError),
        ).toBe(true)

        expect(
          await adminDb
            .collection(FIRESTORE_COLLECTION_NAME.MEMBERS)
            .doc(documentId)
            .update({ test: '1' })
            .catch(isPermissionError),
        ).toBe(true)
      })
    })
  })
  describe('DELETE', () => {
    test('全て->失敗', async () => {
      await testFirestoreDeleteAllowed({ ...commonTestArgs, assert: assertFails })
    })
  })
})
