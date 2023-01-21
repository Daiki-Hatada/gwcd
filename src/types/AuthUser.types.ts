export type AuthUser = {
  uid: string
  displayName: string | null
  email: string | null
  isAnonymous: boolean
  admin: boolean
}

export type CurrentAuthUser = AuthUser | null | undefined
