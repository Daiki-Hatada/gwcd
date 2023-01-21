import { where, WhereFilterOp } from 'firebase/firestore'

import { BaseModel } from '../types/BaseModel.types'

export const safeWhere = <T extends BaseModel, K extends keyof T>(
  fieldPath: K extends string ? K : never,
  opStr: WhereFilterOp,
  value: T[K],
) => where(fieldPath, opStr, value)
