import { Button, Card, FlexBox, Input, Typography } from '../../../../components'
import { useMfaEnrollmentForm } from '../hooks/useMfaEnrollmentForm'

export type MfaEnrollmentFormProps = { onEnroll?: (verificationId?: string) => void }

export const MfaEnrollmentForm = (props: MfaEnrollmentFormProps) => {
  const { register, isSubmitting, onSubmit, error, t } = useMfaEnrollmentForm(props)
  return (
    <form onSubmit={onSubmit}>
      <FlexBox flexDirection='column' alignItems='center' gap='1rem'>
        <Input type='tel' inputMode='tel' {...register('phoneNumber')} />
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
