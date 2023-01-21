import {
  onAuthStateChanged as onFirebaseAuthStateChanged,
  signOut as firebaseSignOut,
  UserCredential,
  signInWithPopup,
  signInWithRedirect,
  deleteUser,
  GoogleAuthProvider,
} from 'firebase/auth'

import { AuthUser } from '../../types/AuthUser.types'
import { auth } from '../firebase/clientApp'

const googleAuthProvider = new GoogleAuthProvider()

export const signOut = (): Promise<void> => firebaseSignOut(auth).catch(console.error)

export const onAuthStateChanged = (callback: (authUser: AuthUser | null) => void) => {
  const unsubscribe = onFirebaseAuthStateChanged(auth, async (authUser) => {
    if (authUser) {
      const { claims } = await authUser.getIdTokenResult()
      return callback({
        ...authUser,
        admin: typeof claims.admin === 'boolean' && claims.admin,
      })
    }
    callback(null)
  })
  return unsubscribe
}

export const deleteAuth = async () => {
  const { currentUser } = auth
  if (!currentUser) throw new Error('Not signed in.')
  await deleteUser(currentUser)
}

export const authWithGoogle = async (props?: { withPopup?: boolean }): Promise<UserCredential | void> => {
  // TODO: `withPopup`に合わせてreturn valueのtypeを変える
  if (props?.withPopup) {
    return signInWithPopup(auth, googleAuthProvider)
  }
  return signInWithRedirect(auth, googleAuthProvider)
}

// export const signInWithMultiFactorAuthentication = () => {
//   const recaptchaVerifier = new RecaptchaVerifier(
//     'sign-in-button',
//     {
//       size: 'invisible',
//     },
//     auth,
//   )
// }
