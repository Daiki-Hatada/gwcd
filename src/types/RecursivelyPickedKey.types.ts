import { RecursiveRecord } from './RecursiveRecord.types'

export type RecursivelyPickedKey<K extends string | number, V, T extends RecursiveRecord<K, V>> = T[K] extends K
  ? K
  : `${K}.${RecursivelyPickedKey<K, V, Extract<T[K], RecursiveRecord<K, V>>>}`
