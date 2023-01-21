import { FirebaseAuthActionMode } from '../../../../types/FirebaseAuthActionMode.types'

export type Props = {
  mode: FirebaseAuthActionMode
  oobCode: string
  continueUrl: string
}
