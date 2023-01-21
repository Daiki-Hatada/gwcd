import * as functions from 'firebase-functions'

const CORS_ALLOWED_ORIGIN_REGEXES = process.env.CORS_ALLOWED_ORIGIN_REGEXES?.split(',').map((str) => str.trim())

export const assertRequestOriginInCorsWhiteList = (req: functions.Request, res: functions.Response) => {
  const requestOrigin = req.headers.origin
  if (requestOrigin && CORS_ALLOWED_ORIGIN_REGEXES?.some((regex) => requestOrigin.match(new RegExp(regex)))) {
    res.set('Access-Control-Allow-Origin', requestOrigin)
    res.set('Access-Control-Allow-Credentials', 'true')
  } else {
    throw new Error('The origin of the request is not contained in the CORS white list.')
  }
}
