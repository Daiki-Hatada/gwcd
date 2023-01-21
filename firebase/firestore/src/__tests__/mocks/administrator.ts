import { Administrator } from '../../../../../src/types/Administrator.type'

export const administratorMock: Administrator = {
  createdAt: 0,
  deletedAt: null,
  email: 'a@example.com',
  id: String(Date.now()),
  name: 'テストさん',
  role: 'writer',
  updatedAt: 0,
}
