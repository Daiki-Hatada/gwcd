import { ALGOLIA_INDEX } from '../../../../src/constants/algoliaIndex'
import { FIRESTORE_COLLECTION_NAME } from '../../../../src/constants/firebase/firestore'
import { onCreated, onDeleted, onUpdated } from './utils/firestoreToAlgolia'

export const onMyFirstDocumentCreated = onCreated({
  collectionName: FIRESTORE_COLLECTION_NAME.MY_FIRST_DOCUMENTS,
  algoliaIndexName: ALGOLIA_INDEX.MY_FIRST_DOCUMENT,
})

export const onMyFirstDocumentUpdated = onUpdated({
  collectionName: FIRESTORE_COLLECTION_NAME.MY_FIRST_DOCUMENTS,
  algoliaIndexName: ALGOLIA_INDEX.MY_FIRST_DOCUMENT,
})

export const onMyFirstDocumentDeleted = onDeleted({
  collectionName: FIRESTORE_COLLECTION_NAME.MY_FIRST_DOCUMENTS,
  algoliaIndexName: ALGOLIA_INDEX.MY_FIRST_DOCUMENT,
})
