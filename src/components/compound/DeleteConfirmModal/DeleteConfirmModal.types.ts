import { ModalProps } from '../Modal/Modal.types'

export type DeleteConfirmModalProps = {
  labels?:
    | string
    | {
        title: string
        message: string
        buttonLabel: string
      }

  onDeleteClick: () => Promise<unknown> | unknown
} & ModalProps
