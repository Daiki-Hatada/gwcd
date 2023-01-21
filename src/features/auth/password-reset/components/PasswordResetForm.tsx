import { Button, Card, FlexBox, Input, Typography } from '../../../../components'
import { emailRegex } from '../../../../utils/regexes'
import { usePasswordResetForm } from '../hooks/usePasswordResetForm'

export const PasswordResetForm = () => {
  const { register, errors, isSubmitting, isValid, error, onSubmit, t } = usePasswordResetForm()

  return (
    <form onSubmit={onSubmit}>
      <FlexBox flexDirection='column' alignItems='center' gap='1rem'>
        <Input
          type='email'
          inputMode='email'
          {...register('email', {
            pattern: {
              value: emailRegex,
              message: t('constants.ERROR.FORM.INVALID_EMAIL'),
            },
          })}
        />
        {(errors.email || error) && (
          <Card padding='medium' theme='error'>
            <Typography size='small' color='error'>
              {errors.email?.message}
              {error}
            </Typography>
          </Card>
        )}
        <Button type='submit' loading={isSubmitting} disabled={!!isSubmitting || !isValid}>
          {t('submit')}
        </Button>
      </FlexBox>
    </form>
  )
}
