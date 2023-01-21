import { FirebaseError } from 'firebase/app'
import { fetchSignInMethodsForEmail } from 'firebase/auth'

import { CLIENT_PATH } from '../../constants/clientPath'
import { SENDER } from '../../constants/email'
import { ERROR_CODE, FIREBASE_AUTH_PROVIDER } from '../../constants/firebase/auth'
import { GeneratePasswordResetLinkBody } from '../../types/ActionLink.types'
import { FirebaseAuthenticationErrorCode } from '../../types/FirebaseAuthenticationErrorCode.types'
import i18n from '../../utils/i18n'
import { auth } from '../firebase/clientApp'
import { httpClient } from '../httpClient'
import { sendEmail } from '../sendEmail'

const generatePasswordResetLink = async ({ email, url }: GeneratePasswordResetLinkBody): Promise<string> => {
  const PROJECT_ID = (() => {
    if (typeof process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID !== 'string')
      throw new Error('`NEXT_PUBLIC_FIREBASE_PROJECT_ID` is expected to be string.')
    return process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  })()

  const res = await httpClient
    .post(`https://asia-northeast1-${PROJECT_ID}.cloudfunctions.net/https-auth-generatePasswordResetLink`, {
      email,
      url,
    })
    .catch((error) => {
      throw error
    })
  const { actionLink } = res.data as { actionLink: string }
  if (typeof actionLink !== 'string') throw new Error('`actionLink` is expected to be string.')
  return actionLink
}

export const sendPasswordResetEmail = async ({ email, continueUrl }: { email: string; continueUrl: string }) => {
  const actionLink = await generatePasswordResetLink({ email, url: continueUrl })
  const url = new URL(actionLink)
  const customActionLink = new URL(`${globalThis.origin}${CLIENT_PATH.AUTH_ACTION.path}${url.search}`)

  await sendEmail({
    to: email,
    from: SENDER,
    subject: 'PASSWORD RESET',
    html: `<html><body>${i18n.t('constants.EMAIL.PASSWORD_RESET_BODY', {
      actionLink: customActionLink,
    })}</body></html>`,
  })
}

export const handlePasswordResetEmailSender = async (
  email: string,
): Promise<{
  result?: void
  error?: FirebaseAuthenticationErrorCode | typeof FIREBASE_AUTH_PROVIDER.GOOGLE
}> => {
  const res = await fetchSignInMethodsForEmail(auth, email).catch((error) => {
    if (!(error instanceof FirebaseError)) throw error
    const { code } = error
    if (code === ERROR_CODE.INVALID_EMAIL) {
      return { error: code } as const
    }
    throw error
  })
  if ('error' in res) return { error: res.error }

  if (res.includes(FIREBASE_AUTH_PROVIDER.PASSWORD)) {
    const result = await sendPasswordResetEmail({
      email,
      continueUrl: `${globalThis.origin}${CLIENT_PATH.AUTH_SIGN_IN.path}`,
    })
    return { result }
  }
  if (res.includes(FIREBASE_AUTH_PROVIDER.GOOGLE)) {
    return {
      error: FIREBASE_AUTH_PROVIDER.GOOGLE,
    }
  }
  if (res.length === 0) {
    return {
      error: ERROR_CODE.USER_NOT_FOUND,
    }
  }
  throw new Error('Not implemented.')
}
