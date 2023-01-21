import { z } from 'zod'

// Email verification
const GenerateEmailVerificationLinkBodySchema = z.object({ email: z.string(), url: z.string() })

export type GenerateEmailVerificationLinkBody = z.infer<typeof GenerateEmailVerificationLinkBodySchema>

export const isGenerateEmailVerificationLinkBody = (value: unknown): value is GenerateEmailVerificationLinkBody => {
  const parsedData = GenerateEmailVerificationLinkBodySchema.safeParse(value)
  if (parsedData.success) {
    return true
  }
  console.error(parsedData.error)
  return false
}

// Password reset
const GeneratePasswordResetLinkBodySchema = z.object({ email: z.string(), url: z.string() })

export type GeneratePasswordResetLinkBody = z.infer<typeof GeneratePasswordResetLinkBodySchema>

export const isGeneratePasswordResetLinkBody = (value: unknown): value is GeneratePasswordResetLinkBody => {
  const parsedData = GeneratePasswordResetLinkBodySchema.safeParse(value)
  if (parsedData.success) {
    return true
  }
  console.error(parsedData.error)
  return false
}
