import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Modal } from '..'
import { Button, FlexBox, Icon, TextArea, Typography } from '../../pure'
import styles from './MessageSenderModal.module.scss'
import { MessageSenderModalForm, MessageSenderModalProps } from './MessageSenderModal.types'

const MessageSenderModal: React.FC<MessageSenderModalProps> = ({
  open,
  onClose,
  title,
  label,
  onSend,
  registerOption,
  useFormOption,
  maxLength,
}) => {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<MessageSenderModalForm>({ mode: 'onChange', ...useFormOption })
  const [hasError, setHasError] = useState(false)

  const onSubmit: SubmitHandler<MessageSenderModalForm> = (data) => {
    const result = onSend(data.message)
    if (result instanceof Promise) {
      result.catch(() => {
        setHasError(true)
      })
    }
    reset()
  }

  const messageLength = watch('message')?.length || 0
  const modalTitle = title || t('hello')
  const modalLabel = label || t('hello')
  const errorMessage = errors.message?.message || t('hello')

  return (
    <Modal open={open} width='large'>
      <FlexBox justifyContent="space-between" alignItems='center' className={styles.header}>
        <Typography size='large' weight="bolder">
          {modalTitle}
        </Typography>
        <button type='button' onClick={onClose}>
          <Icon iconName='close' size='small' />
        </button>
      </FlexBox>
      <form onSubmit={handleSubmit(onSubmit, () => setHasError(true))}>
        <TextArea
          {...register('message', {
            required: true,
            maxLength:
              maxLength !== undefined
                ? {
                    value: maxLength,
                    message: t('hello', { length: maxLength }),
                  }
                : undefined,
            ...registerOption,
          })}
          label={modalLabel}
          style={{ height: '10rem' }}
        />
        <FlexBox justifyContent="flex-end" alignItems='center' gap="0.5rem" className={styles.footer}>
          {hasError && (
            <Typography size='small' color='error'>
              {errorMessage}
            </Typography>
          )}
          {maxLength && (
            <Typography size='small'>
              {messageLength}/{maxLength}
            </Typography>
          )}
          <Button type='submit' iconName='send' size='small'>
            送信
          </Button>
        </FlexBox>
      </form>
    </Modal>
  )
}

export default MessageSenderModal
