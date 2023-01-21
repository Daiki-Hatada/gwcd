import { FirebaseError } from 'firebase/app'
import {
  multiFactor,
  PhoneAuthProvider,
  PhoneMultiFactorGenerator,
  RecaptchaVerifier,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth'

import { ERROR_CODE } from '../../constants/firebase/auth'
import { FirebaseAuthenticationErrorCode } from '../../types/FirebaseAuthenticationErrorCode.types'
import { auth } from '../firebase/clientApp'

export const signInWithEmail = async ({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<{ result?: UserCredential; error?: FirebaseAuthenticationErrorCode }> => {
  try {
    const credential = await signInWithEmailAndPassword(auth, email, password)
    return { result: credential }
  } catch (error) {
    if (!(error instanceof FirebaseError)) throw error
    const { code } = error
    if (code === ERROR_CODE.INVALID_EMAIL) {
      return { error: code }
    }
    if (code === ERROR_CODE.USER_NOT_FOUND) {
      return { error: code }
    }
    if (code === ERROR_CODE.WRONG_PASSWORD) {
      return { error: code }
    }
    throw error
  }
}

export const enrollMfa = async ({ phoneNumber }: { phoneNumber: string }) => {
  const recaptchaVerifier = new RecaptchaVerifier(
    'sign-in-button',
    {
      size: 'invisible',
    },
    auth,
  )
  const { currentUser } = auth
  if (!currentUser) return
  const multiFactorSession = await multiFactor(currentUser).getSession().catch(console.error)
  const phoneInfoOptions = {
    phoneNumber,
    session: multiFactorSession,
  }

  const phoneAuthProvider = new PhoneAuthProvider(auth)

  // Send SMS verification code.
  const verificationId = await phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier)
  return verificationId
}

export const confirmMfaEnrollment = async ({
  verificationId,
  verificationCode,
  displayName,
}: {
  verificationId: string
  verificationCode: string
  displayName?: string
}) => {
  const { currentUser } = auth
  if (!currentUser) return
  const cred = PhoneAuthProvider.credential(verificationId, verificationCode)
  const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred)

  return multiFactor(currentUser).enroll(multiFactorAssertion, displayName)
}
