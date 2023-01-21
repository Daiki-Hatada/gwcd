import { Container } from '../../../../components'
import { FIREBASE_AUTH_ACTION_MODE } from '../../../../constants/firebase/auth'
import { EmailRecoveryForm } from '../components/EmailRecoveryForm'
import { EmailVerificationForm } from '../components/EmailVerificationForm'
import { PasswordResetForm } from '../components/PasswordResetForm'
import { Props } from './Page.types'

// SEE: https://firebase.google.com/docs/auth/custom-email-handler
const Page = ({ mode, oobCode, continueUrl }: Props) => (
  <Container>
    {mode === FIREBASE_AUTH_ACTION_MODE.RESET_PASSWORD && (
      <PasswordResetForm oobCode={oobCode} continueUrl={continueUrl} />
    )}
    {mode === FIREBASE_AUTH_ACTION_MODE.RECOVER_EMAIL && (
      <EmailRecoveryForm oobCode={oobCode} continueUrl={continueUrl} />
    )}
    {mode === FIREBASE_AUTH_ACTION_MODE.VERIFY_EMAIL && (
      <EmailVerificationForm oobCode={oobCode} continueUrl={continueUrl} />
    )}
  </Container>
)

export default Page
