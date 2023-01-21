import React, { createContext, useEffect, useState, useContext, useMemo } from 'react'

import { onAuthStateChanged } from '../libs/auth/common'
import { CurrentAuthUser } from '../types/AuthUser.types'

interface AuthContext {
  currentAuthUser: CurrentAuthUser
}

const AuthContext = createContext<AuthContext | undefined>(undefined)

export function useAuthContext(): AuthContext {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('AuthContext is not defined.')
  }

  return context
}

export function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [currentAuthUser, setCurrentAuthUser] = useState<CurrentAuthUser>()

  useEffect(() => {
    const subscribe = onAuthStateChanged((authUser) => setCurrentAuthUser(authUser))
    return () => subscribe()
  }, [])

  const value = useMemo(
    () => ({
      currentAuthUser,
    }),
    [currentAuthUser],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
