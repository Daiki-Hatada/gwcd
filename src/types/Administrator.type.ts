import { z } from 'zod'

import { BaseModelSchema } from './BaseModel.types'
import { RoleSchema } from './Role.type'

export const AdministratorSchema = z
  .object({
    email: z.string(),
    role: RoleSchema,
    name: z.string(),
  })
  .merge(BaseModelSchema)

export type Administrator = z.infer<typeof AdministratorSchema>

export const isAdministrator = (value: unknown): value is Administrator => {
  const parsedData = AdministratorSchema.safeParse(value)
  if (parsedData.success) return true
  console.error(parsedData.error)
  return false
}
