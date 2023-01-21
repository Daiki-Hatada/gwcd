import { FirebaseFirestore } from '@firebase/firestore-types'
import { assertFails, assertSucceeds } from '@firebase/rules-unit-testing'

import { FIRESTORE_COLLECTION_NAME } from '../../../../src/constants/firebase/firestore'
import { RegistrationApplication } from '../../../../src/types/RegistrationApplication.type'
import { setUpTest } from '../utils/FirebaseTestProvider'
import {
  isPermissionError,
  testFirestoreCreateAllowed,
  testFirestoreDeleteAllowed,
  testFirestoreGetAllowed,
  testFirestoreListAllowed,
  testFirestoreUpdateAllowed,
} from '../utils/testFirestoreAllowed'
import { registrationApplicationMock } from './mocks/registrationApplication'

const myUid = 'alice'

const provider = setUpTest('registrationApplication')

let unAuthDb: FirebaseFirestore
let authDb: FirebaseFirestore
let adminDb: FirebaseFirestore

beforeEach(async () => {
  authDb = await provider.getAuthenticatedClientDB({ uid: myUid })
  unAuthDb = await provider.getUnauthenticatedClientDB()
  adminDb = await provider.getAdminClientDB({ uid: myUid })
})

describe('registrationApplications', () => {
  const commonTestArgs = {
    provider,
    collectionName: FIRESTORE_COLLECTION_NAME.REGISTRATION_APPLICATIONS,
  }
  describe('GET', () => {
    test('ADMINであれば成功', async () => {
      await testFirestoreGetAllowed({ ...commonTestArgs, dbs: [adminDb] })
    })
    describe('ログイン済のとき', () => {
      const setUp = async (uid: string) => {
        await provider.getServerDB(
          async (context) =>
            await context.firestore().collection(FIRESTORE_COLLECTION_NAME.REGISTRATION_APPLICATIONS).doc(uid).set({}),
        )
      }
      test('自分のものであれば成功', async () => {
        await setUp(myUid)
        await assertSucceeds(authDb.collection(FIRESTORE_COLLECTION_NAME.REGISTRATION_APPLICATIONS).doc(myUid).get())
      })
      test('自分以外のものであれば失敗', async () => {
        const uid = myUid + 1
        await setUp(uid)
        await assertFails(authDb.collection(FIRESTORE_COLLECTION_NAME.REGISTRATION_APPLICATIONS).doc(uid).get())
      })
    })
    test('未ログイン->失敗', async () => {
      await testFirestoreListAllowed({ ...commonTestArgs, dbs: [unAuthDb], assert: assertFails })
    })
  })
  describe('LIST', () => {
    test('ADMIN->成功', async () => {
      await testFirestoreListAllowed({ ...commonTestArgs, dbs: [adminDb] })
    })
    test('Adminでないかつログイン済または未ログインであれば失敗', async () => {
      await testFirestoreListAllowed({ ...commonTestArgs, dbs: [authDb, unAuthDb], assert: assertFails })
    })
  })
  describe('CREATE', () => {
    describe('ADMINかつログイン済のとき', () => {
      const create = async (registrationApplication: RegistrationApplication, db: FirebaseFirestore) => {
        const { id, ...body } = registrationApplication
        return db.collection(FIRESTORE_COLLECTION_NAME.REGISTRATION_APPLICATIONS).doc(id).set(body)
      }
      test('自分のものかつstatusがpending->成功', async () => {
        await create({ ...registrationApplicationMock, id: myUid, status: 'pending' }, authDb)
        await create({ ...registrationApplicationMock, id: myUid, status: 'pending' }, adminDb)
      })
      test('自分のものではないかつstatusがpending->失敗', async () => {
        expect(
          await create({ ...registrationApplicationMock, id: myUid + 1, status: 'pending' }, adminDb).catch(
            isPermissionError,
          ),
        ).toBe(true)
        expect(
          await create({ ...registrationApplicationMock, id: myUid + 1, status: 'pending' }, adminDb).catch(
            isPermissionError,
          ),
        ).toBe(true)
      })
      test('自分のものかつstatusがpending以外->失敗', async () => {
        expect(
          await create({ ...registrationApplicationMock, id: myUid, status: 'accepted' }, adminDb).catch(
            isPermissionError,
          ),
        ).toBe(true)
        expect(
          await create({ ...registrationApplicationMock, id: myUid, status: 'accepted' }, adminDb).catch(
            isPermissionError,
          ),
        ).toBe(true)
      })
      test('自分のものではないかつstatusがpending以外->失敗', async () => {
        expect(
          await create({ ...registrationApplicationMock, id: myUid + 1, status: 'accepted' }, adminDb).catch(
            isPermissionError,
          ),
        ).toBe(true)
        expect(
          await create({ ...registrationApplicationMock, id: myUid + 1, status: 'accepted' }, adminDb).catch(
            isPermissionError,
          ),
        ).toBe(true)
      })
    })
    test('未ログイン->失敗', async () => {
      await testFirestoreCreateAllowed({ ...commonTestArgs, dbs: [unAuthDb], assert: assertFails })
    })
  })
  describe('UPDATE', () => {
    test('ADMIN->成功', async () => {
      await testFirestoreUpdateAllowed({ ...commonTestArgs, dbs: [adminDb] })
    })
    test('Adminでないかつ「ログイン済または未ログイン」であれば失敗', async () => {
      await testFirestoreUpdateAllowed({ ...commonTestArgs, dbs: [authDb, unAuthDb], assert: assertFails })
    })
  })

  describe('DELETE', () => {
    test('全て->失敗', async () => {
      await testFirestoreDeleteAllowed({ ...commonTestArgs, assert: assertFails })
    })
  })
})
