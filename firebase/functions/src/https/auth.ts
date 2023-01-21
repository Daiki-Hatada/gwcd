import { auth } from 'firebase-admin'
import { ActionCodeSettings } from 'firebase-admin/lib/auth/action-code-settings-builder'
import * as functions from 'firebase-functions'

import {
  isGenerateEmailVerificationLinkBody,
  isGeneratePasswordResetLinkBody,
} from '../../../../src/types/ActionLink.types'
import { REGION } from '../constants/region'
import { assertRequestOriginInCorsWhiteList } from './utils/assertRequestOriginInCorsWhiteList'

export const generateEmailVerificationLink = functions
  .region(REGION.ASIA_NORTHEAST1)
  .https.onRequest(async (req, res) => {
    try {
      assertRequestOriginInCorsWhiteList(req, res)
    } catch (error) {
      res.status(401).send('Unauthorized')
      return
    }

    if (req.method === 'OPTIONS') {
      res.set('Access-Control-Allow-Methods', 'POST')
      res.set('Access-Control-Allow-Headers', 'Content-Type')
      res.set('Access-Control-Max-Age', '3600')
      res.status(204).send('')
    } else if (req.method === 'POST') {
      if (!isGenerateEmailVerificationLinkBody(req.body)) {
        res.status(406).send('Not Acceptable')
        return
      }
      const { email, url } = req.body
      const actionCodeSettings: ActionCodeSettings = {
        url,
        handleCodeInApp: true,
      }
      const actionLink = await auth().generateEmailVerificationLink(email, actionCodeSettings)
      res.status(200).send({ actionLink })
    } else {
      res.status(405).send('Method Not Allowed')
    }
  })

export const generatePasswordResetLink = functions.region(REGION.ASIA_NORTHEAST1).https.onRequest(async (req, res) => {
  try {
    assertRequestOriginInCorsWhiteList(req, res)
  } catch (error) {
    res.status(401).send('Unauthorized')
    return
  }

  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'POST')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.set('Access-Control-Max-Age', '3600')
    res.status(204).send('')
  } else if (req.method === 'POST') {
    if (!isGeneratePasswordResetLinkBody(req.body)) {
      res.status(406).send('Not Acceptable')
      return
    }
    const { email, url } = req.body
    const actionCodeSettings: ActionCodeSettings = {
      url,
      handleCodeInApp: true,
    }
    const actionLink = await auth().generatePasswordResetLink(email, actionCodeSettings)
    res.status(200).send({ actionLink })
  } else {
    res.status(405).send('Method Not Allowed')
  }
})
