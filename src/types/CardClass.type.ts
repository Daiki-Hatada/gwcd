import { z } from 'zod'

import { CARD_CLASSES } from '../constants/cardClass'
import { createUnionSchema } from '../utils/zod'

export const CardClassSchema = createUnionSchema(CARD_CLASSES)

export type CardClass = z.infer<typeof CardClassSchema>

export const isCardClass = (value: unknown): value is CardClass => {
  const parsedData = CardClassSchema.safeParse(value)
  if (parsedData.success) return true
  console.error(parsedData.error)
  return false
}
