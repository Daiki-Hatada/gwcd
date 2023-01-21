import { z } from 'zod'

import { ROLE_NAMES } from '../constants/role'
import { createUnionSchema } from '../utils/zod'
import { BaseModelSchema } from './BaseModel.types'

export const AdministratorInvitationSchema = z
  .object({
    email: z.string(),
    role: createUnionSchema(ROLE_NAMES),
    approvedAt: z.number().nullable(),
  })
  .merge(BaseModelSchema)

export type AdministratorInvitation = z.infer<typeof AdministratorInvitationSchema>

export const isAdministratorInvitation = (value: unknown): value is AdministratorInvitation => {
  const parsedData = AdministratorInvitationSchema.safeParse(value)
  if (parsedData.success) return true
  console.error(parsedData.error)
  return false
}
