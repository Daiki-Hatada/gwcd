import { FIRESTORE_COLLECTION_NAME } from '../constants/firebase/firestore'
import { isUser } from '../types/User.types'
import { createRepositoy } from './factory'

export const userRepository = createRepositoy({ path: FIRESTORE_COLLECTION_NAME.USERS, isT: isUser })
