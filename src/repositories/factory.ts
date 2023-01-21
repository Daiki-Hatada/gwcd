import { create } from '../libs/api/create'
import { get } from '../libs/api/get'
import { list } from '../libs/api/list'
import { listen } from '../libs/api/listen'
import { update } from '../libs/api/update'
import { BaseModel } from '../types/BaseModel.types'
import { FirestoreCollectionPath } from '../types/FirestoreCollectionName.types'

type Repository<T extends BaseModel> = {
  get: ({ id }: Pick<Parameters<typeof get<T>>[0], 'id'>) => ReturnType<typeof get<T>>
  list: (options: Parameters<typeof list<T>>[0]['options']) => ReturnType<typeof list<T>>
  create: ({ inputData }: Pick<Parameters<typeof create<T>>[0], 'inputData'>) => ReturnType<typeof create<T>>
  update: (props: Omit<Parameters<typeof update<T>>[0], 'path' | 'isT'>) => ReturnType<typeof update<T>>
  listen: (
    options: Pick<Parameters<typeof listen<T>>[0], 'queryConstraints' | 'callback' | 'onError'>,
  ) => ReturnType<typeof listen<T>>
}

type CreateRepositoryProps<T extends BaseModel> = {
  path: FirestoreCollectionPath
  isT: (value: unknown) => value is T
}

export const createRepositoy = <T extends BaseModel>({ path, isT }: CreateRepositoryProps<T>): Repository<T> => ({
  get: ({ id }) => get<T>({ path, id, isT }),
  list: (options) => list<T>({ path, isT, options }),
  create: ({ inputData }) => create<T>({ path, isT, inputData }),
  update: (props) => update<T>({ ...props, path, isT } as Parameters<typeof update<T>>[0]), // TODO: Remove `as`
  listen: (options) => listen<T>({ path, isT, ...options }),
})
