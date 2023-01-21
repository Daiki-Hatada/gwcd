import { Button, Container } from '../../../../components'
import { MfaEnrollmentForm } from '../components/MfaEnrollmentForm'
import { PhoneNumberVerificationForm } from '../components/PhoneNumberVerificationForm'
import { usePage } from '../hooks/usePage'

const Page = () => {
  const { verificationId, sent, onEnroll, onPhoneNumberVerified, onPreviousButtonClicked, t } = usePage()

  return (
    <Container>
      {sent || <MfaEnrollmentForm onEnroll={onEnroll} />}
      {sent && verificationId && (
        <PhoneNumberVerificationForm verificationId={verificationId} onEnroll={onPhoneNumberVerified} />
      )}
      <Button onClick={onPreviousButtonClicked}>{t('previous')}</Button>
    </Container>
  )
}

export default Page
