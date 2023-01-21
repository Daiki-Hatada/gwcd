import { z } from 'zod'

import { ROLE_NAMES } from '../constants/role'
import { createUnionSchema } from '../utils/zod'

export const RoleSchema = createUnionSchema(ROLE_NAMES)

export type Role = z.infer<typeof RoleSchema>

export const isRole = (value: unknown): value is Role => {
  const parsedData = RoleSchema.safeParse(value)
  if (parsedData.success) return true
  console.error(parsedData.error)
  return false
}
