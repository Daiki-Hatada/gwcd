import { z } from 'zod'

import { ROLE_NAMES } from '../constants/role'
import { createUnionSchema } from '../utils/zod'
import { BaseModelSchema } from './BaseModel.types'

export const InvitationSchema = z
  .object({
    email: z.string(),
    role: createUnionSchema(ROLE_NAMES),
    approvedAt: z.number().nullable(),
  })
  .merge(BaseModelSchema)

export type Invitation = z.infer<typeof InvitationSchema>

export const isInvitation = (value: unknown): value is Invitation => {
  const parsedData = InvitationSchema.safeParse(value)
  if (parsedData.success) return true
  console.error(parsedData.error)
  return false
}
