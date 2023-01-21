import { SendEmailRequestBody } from '../types/SendEmailRequestBody.types'
import { httpClient } from './httpClient'

export const sendEmail = async ({ to, from, cc = [], bcc = [], subject, text, html }: SendEmailRequestBody) => {
  const PROJECT_ID = (() => {
    if (typeof process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID !== 'string')
      throw new Error('NEXT_PUBLIC_FIREBASE_PROJECT_ID is expected to be string.')
    return process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  })()

  await httpClient
    .post(`https://asia-northeast1-${PROJECT_ID}.cloudfunctions.net/https-email-sendEmail`, {
      to,
      from,
      cc,
      bcc,
      subject,
      text,
      html,
    })
    .catch((error) => {
      throw error
    })
}
