import { z } from 'zod'

import { BaseModelSchema } from './BaseModel.types'

export const ProfileSchema = z
  .object({
    name: z.string(),
    email: z.string(),
    phoneNumber: z.string().nullable(),
    birthday: z.number().nullable(),
  })
  .merge(BaseModelSchema)

export type Profile = z.infer<typeof ProfileSchema>

export const isProfile = (value: unknown): value is Profile => {
  const parsedData = ProfileSchema.safeParse(value)
  if (parsedData.success) {
    return true
  }
  console.error(parsedData.error)
  return false
}
