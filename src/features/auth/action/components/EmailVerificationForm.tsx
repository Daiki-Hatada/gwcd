import Link from 'next/link'
import { Card, Container, Typography } from '../../../../components'
import { useEmailVerificationForm } from '../hooks/useEmailVerificationForm'

export const EmailVerificationForm = ({ oobCode, continueUrl }: { oobCode: string; continueUrl: string }) => {
  const { t, error } = useEmailVerificationForm({ oobCode, continueUrl })

  return (
    <Container>
      {error ? (
        <Card padding='medium' theme='error'>
          <Typography size='small' color='error'>
            {error}
          </Typography>
        </Card>
      ) : (
        <Link href={continueUrl}>
          <a>{t('next')}</a>
        </Link>
      )}
    </Container>
  )
}
