import { Button, Card, Container, Typography, UtilizedHead } from '../../../../components'
import { CLIENT_PATH } from '../../../../constants/clientPath'
import { usePage } from '../hooks/usePage'

const Page = () => {
  const { currentAuthUser, onButtonClicked, router, t } = usePage()

  return (
    <>
      <UtilizedHead title={CLIENT_PATH.AUTH_EMAIL_VERIFICATION.title} />
      <Container>
        {currentAuthUser?.email ? (
          <Button onClick={onButtonClicked}>{t('submit')}</Button>
        ) : (
          <Card padding='medium' theme='error'>
            <Typography size='small' color='error'>
              You need to be authenticated and register email.
            </Typography>
          </Card>
        )}
        <Button onClick={() => router.back()}>{t('previous')}</Button>
      </Container>
    </>
  )
}

export default Page
