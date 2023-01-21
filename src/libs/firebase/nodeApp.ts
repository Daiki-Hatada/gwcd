import * as admin from 'firebase-admin'

const FIREBASE_PRIVATE_KEY =
  typeof process.env.FIREBASE_PRIVATE_KEY === 'string' ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : ''

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: FIREBASE_PRIVATE_KEY,
    }),
  })
}

export default admin
