import { z } from 'zod'

import { BaseModelSchema } from './BaseModel.types'
import { RoleSchema } from './Role.type'

export const UserSchema = z
  .object({
    email: z.string(),
    role: RoleSchema,
    name: z.string(),
  })
  .merge(BaseModelSchema)

export type User = z.infer<typeof UserSchema>

export const isUser = (value: unknown): value is User => {
  const parsedData = UserSchema.safeParse(value)
  if (parsedData.success) return true
  console.error(parsedData.error)
  return false
}
