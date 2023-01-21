import { Card, Typography, Button, FlexBox, Input } from '../../../../components'
import { passwordRegex } from '../../../../utils/regexes'
import { usePasswordResetForm } from '../hooks/usePasswordResetForm'

export const PasswordResetForm = (props: { oobCode: string; continueUrl: string }) => {
  const { register, errors, isValid, isSubmitting, error, t, onSubmit } = usePasswordResetForm(props)

  return (
    <form onSubmit={onSubmit}>
      <FlexBox flexDirection='column' alignItems='center' gap='1rem'>
        <Input
          type='password'
          inputMode='text'
          {...register('password', {
            pattern: {
              value: passwordRegex,
              message: t('constants.ERROR.FORM.INVALID_PASSWORD'),
            },
          })}
        />
        <Button type='submit' loading={isSubmitting} disabled={!!isSubmitting || !isValid}>
          {t('submit')}
        </Button>
        {(errors.password || error) && (
          <Card padding='medium' theme='error'>
            <Typography size='small' color='error'>
              {errors.password?.message}
              {error}
            </Typography>
          </Card>
        )}
      </FlexBox>
    </form>
  )
}
