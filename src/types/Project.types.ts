import { z } from 'zod'

import { BaseModelSchema } from './BaseModel.types'

export const ProjectSchema = z
  .object({
    name: z.string(),
  })
  .merge(BaseModelSchema)

export type Project = z.infer<typeof ProjectSchema>

export const isProject = (value: unknown): value is Project => {
  const parsedData = ProjectSchema.safeParse(value)
  if (parsedData.success) {
    return true
  }
  console.error(parsedData.error)
  return false
}
