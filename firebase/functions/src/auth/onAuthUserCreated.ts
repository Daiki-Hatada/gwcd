import * as functions from 'firebase-functions'

import { FIRESTORE_COLLECTION_NAME } from '../../../../src/constants/firebase/firestore'
import { Profile } from '../../../../src/types/Profile.types'
import admin from '../admin'
import { REGION } from '../constants/region'

const initialProfile: Omit<Profile, 'id' | 'createdAt' | 'updatedAt'> = {
  name: '',
  email: '',
  phoneNumber: null,
  birthday: null,
  deletedAt: null,
}

export const onAuthUserCreated = functions
  .region(REGION.ASIA_NORTHEAST1)
  .auth.user()
  .onCreate(async (user) => {
    const userToBeCreated = { id: user.uid, email: user.email, phoneNumber: user.phoneNumber || null }
    const { id, ...data } = { ...initialProfile, ...userToBeCreated }
    const now = Date.now()
    const db = admin.firestore()
    await db
      .collection(FIRESTORE_COLLECTION_NAME.PROFILES)
      .doc(id)
      .set({
        ...data,
        createdAt: now,
        updatedAt: now,
      })
  })
