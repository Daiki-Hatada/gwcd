import { RegistrationApplication } from '../../../../../src/types/RegistrationApplication.type'

export const registrationApplicationMock: RegistrationApplication = {
  cardClass: 'green',
  companyName: 'test',
  createdAt: Date.now(),
  deletedAt: null,
  email: 'a@example.com',
  firstSixDigits: '333333',
  id: String(Date.now()),
  lastFourDigits: '333',
  lastName: 'lastName',
  status: 'pending',
  updatedAt: Date.now(),
}
