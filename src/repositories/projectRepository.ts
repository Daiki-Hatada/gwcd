import { FIRESTORE_COLLECTION_NAME } from '../constants/firebase/firestore'
import { isProject } from '../types/Project.types'
import { createRepositoy } from './factory'

export const projectRepository = createRepositoy({ path: FIRESTORE_COLLECTION_NAME.PROJECTS, isT: isProject })
