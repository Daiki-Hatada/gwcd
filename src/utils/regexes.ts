export const originRegex =
  /^https?:\/\/(?=.{1,254}(?::|$))(?:(?!\d|-)(?![a-z0-9\-]{1,62}-(?:\.|:|$))[a-z0-9\-]{1,63}\b(?!\.$)\.?)+(:\d+)?$/i
export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
export const e164PhoneNumberRegex = /^\+[1-9]\d{1,14}$/
export const japaneseRawPhoneNumberRegex = /^0(5|[7-9])0\d{8}$/
export const iso8601Regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)((-(\d{2}):(\d{2})|Z)?)$/
export const passwordRegex = /^^(?=.*([a-zA-Z]))(?=.*\d)[a-zA-Z\d:]{8,24}$/
export const usernameRegex = /^[a-zA-Z\d:]{8,24}$/
