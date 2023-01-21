import { ERROR_CODE } from '../constants/firebase/auth'

export type FirebaseAuthenticationErrorCode = typeof ERROR_CODE[keyof typeof ERROR_CODE]

export const isFirebaseAuthenticationErrorCode = (value: unknown) =>
  Object.values(ERROR_CODE).includes(value as FirebaseAuthenticationErrorCode)
