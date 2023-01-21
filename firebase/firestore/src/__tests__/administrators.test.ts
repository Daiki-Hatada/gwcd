import { FirebaseFirestore } from '@firebase/firestore-types'
import { assertFails } from '@firebase/rules-unit-testing'

import { FIRESTORE_COLLECTION_NAME } from '../../../../src/constants/firebase/firestore'
import { Administrator } from '../../../../src/types/Administrator.type'
import { setUpTest } from '../utils/FirebaseTestProvider'
import {
  testFirestoreCreateAllowed,
  testFirestoreDeleteAllowed,
  testFirestoreGetAllowed,
  testFirestoreListAllowed,
  testFirestoreUpdateAllowed,
} from '../utils/testFirestoreAllowed'
import { administratorMock } from './mocks/administrator'

const myUid = 'alice'

const provider = setUpTest('administrators')

let unAuthDb: FirebaseFirestore
let authDb: FirebaseFirestore
let adminDb: FirebaseFirestore

beforeEach(async () => {
  authDb = await provider.getAuthenticatedClientDB({ uid: myUid })
  unAuthDb = await provider.getUnauthenticatedClientDB()
  adminDb = await provider.getAdminClientDB({ uid: myUid })
})

describe('administrators', () => {
  const commonTestArgs = {
    provider,
    collectionName: FIRESTORE_COLLECTION_NAME.ADMINISTRATORS,
  }
  describe('GET', () => {
    test('ADMIN->成功', async () => {
      await testFirestoreGetAllowed({ ...commonTestArgs, dbs: [adminDb] })
    })
    test('Adminでないかつ「ログイン済または未ログイン」->失敗', async () => {
      await testFirestoreGetAllowed({ ...commonTestArgs, dbs: [authDb, unAuthDb], assert: assertFails })
    })
  })
  describe('LIST', () => {
    test('ADMIN->成功', async () => {
      await testFirestoreListAllowed({ ...commonTestArgs, dbs: [adminDb] })
    })
    test('Adminでないかつ「ログイン済または未ログイン」->失敗', async () => {
      await testFirestoreListAllowed({ ...commonTestArgs, dbs: [authDb, unAuthDb], assert: assertFails })
    })
  })
  describe('CREATE', () => {
    test('全て->失敗', async () => {
      await testFirestoreCreateAllowed({ ...commonTestArgs, assert: assertFails })
    })
  })
  describe('UPDATE', () => {
    describe('ADMINのとき', () => {
      const setUp = async (administrator: Administrator) => {
        const { id, ...body } = administrator
        await provider.getServerDB((context) =>
          context.firestore().collection(FIRESTORE_COLLECTION_NAME.ADMINISTRATORS).doc(id).set(body),
        )
      }
      test('メールを変更->失敗', async () => {
        const email = 'a' + administratorMock.email
        await setUp({ ...administratorMock, email, id: myUid })
        await testFirestoreUpdateAllowed({
          ...commonTestArgs,
          dbs: [adminDb],
          documentId: myUid,
          assert: assertFails,
          after: { email: email + 1 },
        })
      })
      test('自分のロールを変更->失敗', async () => {
        await setUp({ ...administratorMock, role: 'writer', id: myUid })
        await testFirestoreUpdateAllowed({
          ...commonTestArgs,
          dbs: [adminDb],
          documentId: myUid,
          assert: assertFails,
          after: { role: 'viewer' },
        })
      })
      test('viewerが他人のデータを変更->失敗', async () => {
        await setUp({ ...administratorMock, role: 'viewer', id: myUid })
        await setUp({ ...administratorMock, role: 'viewer' })
        await testFirestoreUpdateAllowed({
          ...commonTestArgs,
          dbs: [adminDb],
          documentId: administratorMock.id,
          assert: assertFails,
          after: { name: 'John' },
        })
      })
      test('writerが他人のロールを変更->成功', async () => {
        await setUp({ ...administratorMock, role: 'writer', id: myUid })
        await setUp({ ...administratorMock, role: 'viewer' })
        await testFirestoreUpdateAllowed({
          ...commonTestArgs,
          dbs: [adminDb],
          documentId: administratorMock.id,
          after: { role: 'writer' },
        })
      })
    })
    test('Adminでないならば失敗', async () => {
      await testFirestoreUpdateAllowed({ ...commonTestArgs, dbs: [authDb, unAuthDb], assert: assertFails })
    })
  })
  describe('DELETE', () => {
    test('全て->失敗', async () => {
      await testFirestoreDeleteAllowed({ ...commonTestArgs, assert: assertFails })
    })
  })
})
