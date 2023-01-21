import { Button, Card, FlexBox, Input, Typography } from '../../../../components'
import { usePhoneNumberVerificationForm } from '../hooks/usePhoneNumberVerificationForm'

export type PhoneNumberVerificationFormProps = {
  verificationId: string
  onEnroll?: () => void
}

export const PhoneNumberVerificationForm = (props: PhoneNumberVerificationFormProps) => {
  const { register, isSubmitting, error, onSubmit, t } = usePhoneNumberVerificationForm(props)
  return (
    <form onSubmit={onSubmit}>
      <FlexBox flexDirection='column' alignItems='center' gap='1rem'>
        <Input type='number' inputMode='decimal' {...register('verificationCode')} />
        {error && (
          <Card padding='medium' theme='error'>
            <Typography size='small' color='error'>
              {error}
            </Typography>
          </Card>
        )}
        <Button type='submit' loading={isSubmitting} disabled={!!isSubmitting}>
          {t('submit')}
        </Button>
      </FlexBox>
    </form>
  )
}
