import { E164PhoneNumber, JapanesePhoneNumber, isE164PhoneNumber } from '../types/PhoneNumber.types'

export const toE164 = (japanesePhoneNumber: JapanesePhoneNumber): E164PhoneNumber => {
  const e164PhoneNumber = `+81${japanesePhoneNumber.slice(1)}`
  if (isE164PhoneNumber(e164PhoneNumber)) {
    return e164PhoneNumber
  }
  throw new Error('Invalid E164 phone number.')
}
