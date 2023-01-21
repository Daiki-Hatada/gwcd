/*
  anyを使用しているが、
  getNestValue({ a: { b: { c: { d: '111' } } } }, 'a.b.c.d') -> success
  getNestValue({ a: { b: { c: { d: '111' } } } }, 'a.b') -> error
  になるため、使用箇所での型制限によって安全姓はある程度担保されている
*/
import { z } from 'zod'

const PrimitiveSchema = z.union([z.string(), z.number(), z.null(), z.boolean(), z.undefined(), z.array(z.unknown())])
export type Primitive = z.infer<typeof PrimitiveSchema>
const isPrimitive = (value: unknown): value is Primitive => {
  const parsedData = PrimitiveSchema.safeParse(value)
  if (parsedData.success) return true
  console.error(parsedData.error)
  return false
}

export type RecursiveRecord = {
  [key in string]: Primitive | RecursiveRecord
}
export type RecursivelyPickedKey<T extends RecursiveRecord, K = keyof T> = K extends string
  ? T[K] extends Primitive
    ? K
    : `${K}.${RecursivelyPickedKey<Extract<T[K], RecursiveRecord>>}`
  : never

export function getNestValue<T extends RecursiveRecord>(object: T, path: RecursivelyPickedKey<T>): Primitive {
  const keys = path.split('.')
  let result: RecursiveRecord = object
  keys.forEach((key) => {
    result = result[key] as RecursiveRecord
  })
  if (isPrimitive(result)) return result
  console.error(`有効なパスではありません。baseObject:${String(object)} path:${path} Return値${String(result)}`)
  
}
