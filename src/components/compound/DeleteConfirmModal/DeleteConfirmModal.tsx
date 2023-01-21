import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Modal } from '..'
import { Button, Card, FlexBox, Typography } from '../../pure'
import { DeleteConfirmModalProps } from './DeleteConfirmModal.types'

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({ onDeleteClick, labels, ...modalProps }) => {
  const { t } = useTranslation()
  const [errorMessage, setErrorMessage] = useState('')
  const { title, message, buttonLabel } = useMemo(() => {
    if (!labels)
      return {
        title: t('hello'),
        message: t('hello'),
        buttonLabel: t('hello'),
      }
    if (typeof labels === 'string')
      return {
        title: t('hello', { target: labels }),
        message: t('hello', { target: labels }),
        buttonLabel: t('hello', { target: labels }),
      }
    return labels
  }, [t, labels])

  return (
    <Modal title={title} width="large" {...modalProps}>
      <Card theme="error" padding="small">
        <Typography color="error">{message}</Typography>
      </Card>
      {errorMessage && (
        <Card theme="error" padding="small">
          <Typography color="error">{errorMessage}</Typography>
        </Card>
      )}
      <FlexBox margin="2rem 0 0" justifyContent="flex-end">
        <Button
          onClick={async () => {
            const result = onDeleteClick()
            if (result instanceof Promise) await result.catch(() => setErrorMessage(t('hello')))
          }}
          theme="danger"
        >
          {buttonLabel}
        </Button>
      </FlexBox>
    </Modal>
  )
}
export default DeleteConfirmModal
