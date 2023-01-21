import { CLIENT_PATH } from '../../constants/clientPath'
import { SENDER } from '../../constants/email'
import { GenerateEmailVerificationLinkBody } from '../../types/ActionLink.types'
import i18n from '../../utils/i18n'
import { httpClient } from '../httpClient'
import { sendEmail } from '../sendEmail'

const generateEmailVerificationLink = async ({ email, url }: GenerateEmailVerificationLinkBody): Promise<string> => {
  const PROJECT_ID = (() => {
    if (typeof process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID !== 'string')
      throw new Error('`NEXT_PUBLIC_FIREBASE_PROJECT_ID` is expected to be string.')
    return process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  })()

  const res = await httpClient
    .post(`https://asia-northeast1-${PROJECT_ID}.cloudfunctions.net/https-auth-generateEmailVerificationLink`, {
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

export const sendVerificationEmail = async ({ email, continueUrl }: { email: string; continueUrl: string }) => {
  const actionLink = await generateEmailVerificationLink({ email, url: continueUrl })
  const url = new URL(actionLink)
  const customActionLink = new URL(`${globalThis.origin}${CLIENT_PATH.AUTH_ACTION.path}${url.search}`)

  await sendEmail({
    to: email,
    from: SENDER,
    subject: 'EMAIL VERIFICATION',
    html: `<html><body>${i18n.t('constants.EMAIL.VERIFICATION_EMAIL_BODY', {
      actionLink: customActionLink,
    })}</body></html>`,
  })
}
