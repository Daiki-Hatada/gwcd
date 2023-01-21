import * as functions from 'firebase-functions'

import { FirestoreCollectionName } from '../../../../../src/types/FirestoreCollectionName.types'
import { REGION } from '../../constants/region'
import { getClient } from './algoliaClient'

export const onCreated = ({
  collectionName,
  region = REGION.ASIA_NORTHEAST1,
  algoliaIndexName,
}: {
  collectionName: FirestoreCollectionName
  region?: string
  algoliaIndexName: string
}) =>
  functions
    .region(region)
    .firestore.document(`${collectionName}/{id}`)
    .onCreate((snapshot, context) => {
      const client = getClient()
      const index = client.initIndex(algoliaIndexName)
      if (typeof context.params.id !== 'string') throw new Error('`id` is expected to be string.')
      const { id } = context.params
      const obj = {
        id,
        objectID: id,
        ...snapshot.data(),
      }
      return index.saveObject(obj)
    })

export const onUpdated = ({
  collectionName,
  region = REGION.ASIA_NORTHEAST1,
  algoliaIndexName,
}: {
  collectionName: FirestoreCollectionName
  region?: string
  algoliaIndexName: string
}) =>
  functions
    .region(region)
    .firestore.document(`${collectionName}/{id}`)
    .onUpdate((change, context) => {
      const client = getClient()
      const index = client.initIndex(algoliaIndexName)
      if (typeof context.params.id !== 'string') throw new Error('`id` is expected to be string.')
      const { id } = context.params
      const obj = {
        id,
        objectID: id,
        ...change.after.data(),
      }
      return index.partialUpdateObject(obj)
    })

export const onDeleted = ({
  collectionName,
  region = REGION.ASIA_NORTHEAST1,
  algoliaIndexName,
}: {
  collectionName: FirestoreCollectionName
  region?: string
  algoliaIndexName: string
}) =>
  functions
    .region(region)
    .firestore.document(`${collectionName}/{id}`)
    .onDelete((_, context) => {
      const client = getClient()
      const index = client.initIndex(algoliaIndexName)
      if (typeof context.params.id !== 'string') throw new Error('`id` is expected to be string.')
      const { id } = context.params
      return index.deleteObject(id)
    })
