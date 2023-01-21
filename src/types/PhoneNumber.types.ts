import { e164PhoneNumberRegex, japaneseRawPhoneNumberRegex } from '../utils/regexes'

export type JapanesePhoneNumber = string & { __isJapanesePhoneNumber: true }

export type E164PhoneNumber = string & { __isE164PhoneNumber: true }

export const isJapanesePhoneNumber = (value: unknown): value is JapanesePhoneNumber => {
  if (!(typeof value === 'string' && value.match(japaneseRawPhoneNumberRegex))) {
    return false
  }
  return true
}

export const isE164PhoneNumber = (value: unknown): value is E164PhoneNumber => {
  if (!(typeof value === 'string' && value.match(e164PhoneNumberRegex))) {
    return false
  }
  return true
}
