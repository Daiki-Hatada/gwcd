import { FirebaseError } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  UserCredential,
  EmailAuthProvider,
  linkWithCredential,
  signInWithCredential,
  fetchSignInMethodsForEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

import { ERROR_CODE, FIREBASE_AUTH_PROVIDER } from '../../constants/firebase/auth'
import { FirebaseAuthenticationErrorCode } from '../../types/FirebaseAuthenticationErrorCode.types'
import i18n from '../../utils/i18n'
import { auth } from '../firebase/clientApp'
import { sendVerificationEmail } from './verifyEmail'

const googleAuthProvider = new GoogleAuthProvider()

export const signUp = async ({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<{ result?: UserCredential; error?: FirebaseAuthenticationErrorCode }> => {
  if (auth.currentUser) {
    const emailAuthCredential = EmailAuthProvider.credential(email, password)
    try {
      const credential = await linkWithCredential(auth.currentUser, emailAuthCredential)
      return { result: credential }
    } catch (error) {
      const { code } = error as FirebaseError
      if (code === ERROR_CODE.EMAIL_ALREADY_IN_USE) {
        const credential = await signInWithCredential(auth, emailAuthCredential)
        return { result: credential }
      }
      if (code === ERROR_CODE.PROVIDER_ALREADY_LINKED) {
        // Do nothing
      } else {
        throw error
      }
    }
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)

    if (auth.currentUser) {
      await sendVerificationEmail({ email, continueUrl: globalThis.origin })
    }
    return { result: userCredential }
  } catch (error) {
    if (!(error instanceof FirebaseError)) throw error
    const { code } = error
    const expectedErrorCodes = [ERROR_CODE.EMAIL_ALREADY_IN_USE, ERROR_CODE.INVALID_EMAIL, ERROR_CODE.WEAK_PASSWORD]
    if (code === ERROR_CODE.EMAIL_ALREADY_IN_USE) {
      const res = await fetchSignInMethodsForEmail(auth, email).catch((error) => {
        if (!(error instanceof FirebaseError)) throw error
        const { code } = error
        if (code === ERROR_CODE.INVALID_EMAIL) {
          return { error: code } as const
        }
        throw error
      })
      if ('error' in res) return { error: res.error }

      if (!res.includes(FIREBASE_AUTH_PROVIDER.GOOGLE)) {
        return {
          error: code,
        }
      }
      const emailAuthCredential = EmailAuthProvider.credential(email, password)
      if (!globalThis.confirm(i18n.t('constants.ERROR.FIREBASE_AUTHENTICATION.EMAIL_ALREADY_USED_BY_GOOGLE_AUTH'))) {
        return { error: code }
      }
      const result = await signInWithPopup(auth, googleAuthProvider)
      const credential = await linkWithCredential(result.user, emailAuthCredential)
      return { result: credential }
    }
    if (expectedErrorCodes.includes(code as typeof expectedErrorCodes[number])) {
      return { error: code as FirebaseAuthenticationErrorCode }
    }
    throw error
  }
}
