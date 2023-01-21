import { z } from 'zod'

import { BaseModelSchema } from './BaseModel.types'
import { CardClassSchema } from './CardClass.type'
import { RegistrationApplicationStatusSchema } from './RegistrationApplicationStatus.type'

export const RegistrationApplicationSchema = z
  .object({
    email: z.string(),
    companyName: z.string(),
    lastName: z.string(),
    firstSixDigits: z.string(),
    lastFourDigits: z.string(),
    status: RegistrationApplicationStatusSchema,
    cardClass: CardClassSchema,
  })
  .merge(BaseModelSchema)

export type RegistrationApplication = z.infer<typeof RegistrationApplicationSchema>

export const isRegistrationApplication = (value: unknown): value is RegistrationApplication => {
  const parsedData = RegistrationApplicationSchema.safeParse(value)
  if (parsedData.success) return true
  console.error(parsedData.error)
  return false
}
