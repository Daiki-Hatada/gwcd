import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import { FlexBox, Input, Typography } from '../../pure'
import styles from './CardNumberInput.module.scss'
import { CardNumberInputProps } from './CardNumberInput.types'

export default function CardNumberInput<T extends object>({
  register,
  firstSixDigitsName,
  lastFourDigitsName,
  errors,
  ...otherProps
}: CardNumberInputProps<T>) {
  const { t } = useTranslation()

  const firstSixDigitsError = (() => {
    const errorMessage = errors?.[firstSixDigitsName]?.message
    return typeof errorMessage === 'string' ? errorMessage : undefined
  })()

  const lastFourDigitsError = (() => {
    const errorMessage = errors?.[lastFourDigitsName]?.message
    return typeof errorMessage === 'string' ? errorMessage : undefined
  })()

  return (
    <div>
      <FlexBox {...otherProps} className={classNames(styles.root, otherProps.className)} alignItems="flex-start">
        <Input
          type="text"
          inputMode="decimal"
          maxLength={6}
          placeholder="000000"
          gap={0}
          suffix={
            <Typography className={styles.split} color="gray-dark">
              ーXXXXXー
            </Typography>
          }
          {...register(firstSixDigitsName, {
            validate: (value) => {
              if (Number.isNaN(Number(value))) return t('hello')
              if (String(value).length !== 6) return t('hello')
            },
          })}
          error={firstSixDigitsError}
          className={classNames(styles.input, styles['first-four-digits'])}
        />
        <Input
          type="text"
          inputMode="decimal"
          maxLength={4}
          placeholder="0000"
          {...register(lastFourDigitsName, {
            validate: (value) => {
              if (Number.isNaN(Number(value))) return t('hello')
              if (String(value).length !== 4) return t('hello')
            },
          })}
          error={lastFourDigitsError}
          className={classNames(styles.input, styles['last-six-digits'])}
        />
      </FlexBox>
    </div>
  )
}
