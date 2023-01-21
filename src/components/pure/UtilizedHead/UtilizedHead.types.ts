export type OGPLanguageCode = 'ja_JP' | 'en_US'

export type MetaData = {
  title?: string
  description?: string
  pageUrl?: string
  imageUrl?: string
  imageWidth?: number
  imageHeight?: number
  language?: OGPLanguageCode
}
