export type RecursiveRecord<T extends string | number | symbol, U> = {
  [key in T]: U | RecursiveRecord<T, U>
}
