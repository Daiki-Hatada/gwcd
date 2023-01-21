import * as SendGrid from '@sendgrid/mail'
import * as functions from 'firebase-functions'

import { isSendEmailRequestBody } from '../../../../src/types/SendEmailRequestBody.types'
import { REGION } from '../constants/region'
import { assertRequestOriginInCorsWhiteList } from './utils/assertRequestOriginInCorsWhiteList'

export const sendEmail = functions.region(REGION.ASIA_NORTHEAST1).https.onRequest(async (req, res) => {
  try {
    assertRequestOriginInCorsWhiteList(req, res)
  } catch (error) {
    res.status(401).send('Unauthorized')
    return
  }
  SendGrid.setApiKey(process.env.SENDGRID_API_KEY ? process.env.SENDGRID_API_KEY : '')

  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'POST')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.set('Access-Control-Max-Age', '3600')
    res.status(204).send('')
  } else if (req.method === 'POST') {
    if (!isSendEmailRequestBody(req.body)) {
      res.status(406).send('Not Acceptable')
      return
    }
    const { from, to, cc, bcc, subject, text = '', html = '' } = req.body
    const message = text
      ? {
          from,
          to,
          cc,
          bcc,
          subject,
          text,
        }
      : {
          from,
          to,
          cc,
          bcc,
          subject,
          html,
        }
    await SendGrid.send(message).catch((error) => {
      res.status(400).send(`An error occurred: ${String(error)}`)
    })
    res.status(200).send('Email successfully sent!')
  } else {
    res.status(405).send('Method Not Allowed')
  }
})
