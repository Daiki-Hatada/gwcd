import { Primitive, z, ZodLiteral, ZodNever } from 'zod'

type MappedZodLiterals<T extends readonly Primitive[]> = {
  -readonly [K in keyof T]: ZodLiteral<T[K]>
}

export function createUnionSchemaLongerThanOne<A extends Readonly<[Primitive, Primitive, ...Primitive[]]>>(
  literals: A,
) {
  return z.union(literals.map((value) => z.literal(value)) as MappedZodLiterals<A>)
}

export function createUnionSchema<T extends readonly []>(values: T): ZodNever
export function createUnionSchema<T extends readonly [Primitive]>(values: T): ZodLiteral<T[0]>
export function createUnionSchema<T extends readonly [Primitive, Primitive, ...Primitive[]]>(
  values: T,
): z.ZodUnion<MappedZodLiterals<T>>

export function createUnionSchema<T extends readonly Primitive[]>(values: T) {
  if (values.length > 1) {
    return createUnionSchemaLongerThanOne(values as typeof values & [Primitive, Primitive, ...Primitive[]])
  }
  if (values.length === 1) {
    return z.literal(values[0])
  }
  if (values.length === 0) {
    return z.never()
  }
  throw new Error('Array must have a length')
}

export function createOmitArgsBySchema<T extends object>(shape: T): { [key in keyof T]: true } {
  const keys = Object.keys(shape) as (keyof T)[]

  const result: Partial<{ [key in keyof T]: true }> = {}

  keys.forEach((key) => {
    result[key] = true
  })

  return result as { [key in keyof T]: true } // Object.keysで全てkeyが列挙されており、安全に asを使用できる
}
