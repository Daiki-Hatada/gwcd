import { FirebaseFirestore } from '@firebase/firestore-types'
import { assertFails } from '@firebase/rules-unit-testing'

import { FIRESTORE_COLLECTION_NAME } from '../../../../src/constants/firebase/firestore'
import { Administrator } from '../../../../src/types/Administrator.type'
import { AdministratorInvitation } from '../../../../src/types/AdministratorInvitation.type'
import { setUpTest } from '../utils/FirebaseTestProvider'
import {
  testFirestoreCreateAllowed,
  testFirestoreDeleteAllowed,
  testFirestoreUpdateAllowed,
} from '../utils/testFirestoreAllowed'
import { administratorMock } from './mocks/administrator'
import { administratorInvitationMock } from './mocks/administratorInvitation'
const myUid = 'alice'

const provider = setUpTest('administratorInvitations')

let unAuthDb: FirebaseFirestore
let authDb: FirebaseFirestore
let adminDb: FirebaseFirestore

beforeEach(async () => {
  authDb = await provider.getAuthenticatedClientDB({ uid: myUid })
  unAuthDb = await provider.getUnauthenticatedClientDB()
  adminDb = await provider.getAdminClientDB({ uid: myUid })
})

describe('administratorInvitations', () => {
  const commonTestArgs = {
    provider,
    collectionName: FIRESTORE_COLLECTION_NAME.ADMINISTRATOR_INVITATIONS,
  }
  const setUpMyAdminAccount = (role: Administrator['role']) =>
    provider.getServerDB((context) =>
      context
        .firestore()
        .collection(FIRESTORE_COLLECTION_NAME.ADMINISTRATORS)
        .doc(myUid)
        .set({ ...administratorMock, role }),
    )
  describe('CREATE', () => {
    describe('ADMINのとき', () => {
      test('自分がwriterの時->成功', async () => {
        await setUpMyAdminAccount('writer')
        await testFirestoreCreateAllowed({ ...commonTestArgs, dbs: [adminDb] })
      })
      test('自分がviewerの時->失敗', async () => {
        await setUpMyAdminAccount('viewer')
        await testFirestoreCreateAllowed({ ...commonTestArgs, dbs: [adminDb], assert: assertFails })
      })
    })
    test('Adminでないかつ「ログイン済・未ログイン」であれば失敗', async () => {
      await testFirestoreCreateAllowed({ ...commonTestArgs, dbs: [authDb, unAuthDb], assert: assertFails })
    })
  })
  describe('UPDATE', () => {
    describe('ADMINのとき', () => {
      const setUpInvitation = async (administratorInvitation: AdministratorInvitation) => {
        const { id, ...body } = administratorInvitation
        await provider.getServerDB((context) =>
          context.firestore().collection(FIRESTORE_COLLECTION_NAME.ADMINISTRATOR_INVITATIONS).doc(id).set(body),
        )
      }
      test('メールを変更->失敗', async () => {
        const email = 'a@example.com'
        await setUpMyAdminAccount('writer')
        await setUpInvitation({ ...administratorInvitationMock, email })
        await testFirestoreUpdateAllowed({
          ...commonTestArgs,
          dbs: [adminDb],
          documentId: administratorInvitationMock.id,
          assert: assertFails,
          after: { email: email + 1 },
        })
      })
      test('writerがroleの変更->成功', async () => {
        await setUpMyAdminAccount('writer')
        await setUpInvitation(administratorInvitationMock)
        await testFirestoreUpdateAllowed({
          ...commonTestArgs,
          dbs: [adminDb],
          documentId: administratorInvitationMock.id,
          after: { role: 'viewer' },
        })
      })
      test('viewerがroleの変更->失敗', async () => {
        await setUpMyAdminAccount('viewer')
        await setUpInvitation(administratorInvitationMock)
        await testFirestoreUpdateAllowed({
          ...commonTestArgs,
          dbs: [adminDb],
          documentId: administratorInvitationMock.id,
          assert: assertFails,
          after: { role: 'viewer' },
        })
      })
    })
    test('Adminでないかつ「ログイン済・未ログイン」であれば失敗', async () => {
      await testFirestoreUpdateAllowed({ ...commonTestArgs, dbs: [authDb, unAuthDb], assert: assertFails })
    })
  })
  describe('DELETE', () => {
    test('全て->失敗', async () => {
      await testFirestoreDeleteAllowed({ ...commonTestArgs, assert: assertFails })
    })
  })
})
