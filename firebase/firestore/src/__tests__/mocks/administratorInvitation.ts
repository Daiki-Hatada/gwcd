import { AdministratorInvitation } from '../../../../../src/types/AdministratorInvitation.type'

export const administratorInvitationMock: AdministratorInvitation = {
  createdAt: Date.now(),
  approvedAt: null,
  deletedAt: null,
  email: '',
  id: String(Date.now()),
  role: 'writer',
  updatedAt: Date.now(),
}
