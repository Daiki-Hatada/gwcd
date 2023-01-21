import { FIREBASE_AUTH_ACTION_MODE } from '../constants/firebase/auth'

export type FirebaseAuthActionMode = typeof FIREBASE_AUTH_ACTION_MODE[keyof typeof FIREBASE_AUTH_ACTION_MODE]
