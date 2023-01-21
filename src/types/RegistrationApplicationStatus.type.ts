import { z } from 'zod'

import { REGISTRATION_APPLICATION_STATUS } from '../constants/registrationApplicationStatus'
import { createUnionSchema } from '../utils/zod'

export const RegistrationApplicationStatusSchema = createUnionSchema(REGISTRATION_APPLICATION_STATUS)

export type RegistrationApplicationStatus = z.infer<typeof RegistrationApplicationStatusSchema>

export const isRegistrationApplicationStatus = (value: unknown): value is RegistrationApplicationStatus => {
  const parsedData = RegistrationApplicationStatusSchema.safeParse(value)
  if (parsedData.success) return true
  console.error(parsedData.error)
  return false
}
