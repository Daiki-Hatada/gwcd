export const ROLE = {
  WRITER: 'writer',
  VIEWER: 'viewer',
} as const

export const ROLE_NAMES = Object.values(ROLE) as ['writer', 'viewer']
