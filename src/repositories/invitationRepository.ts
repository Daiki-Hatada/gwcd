import { FIRESTORE_COLLECTION_NAME } from '../constants/firebase/firestore'
import { isInvitation } from '../types/Invitation.type'
import { createRepositoy } from './factory'

export const invitationRepository = createRepositoy({
  path: FIRESTORE_COLLECTION_NAME.INVITATIONS,
  isT: isInvitation,
})
