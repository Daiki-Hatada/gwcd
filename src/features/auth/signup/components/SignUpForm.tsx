import { Button, Card, FlexBox, Input, Typography } from '../../../../components'
import { emailRegex, passwordRegex } from '../../../../utils/regexes'
import { useSignUpForm } from '../hooks/useSignUpForm'

export const SignUpForm = () => {
  const { register, errors, isSubmitting, isValid, error, onSubmit, t } = useSignUpForm()

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
        {(errors.email || errors.password || error) && (
          <Card padding='medium' theme='error'>
            <Typography size='small' color='error'>
              {errors.email?.message}
              {errors.password?.message}
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
