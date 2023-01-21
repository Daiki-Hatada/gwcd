import { ReactNode } from 'react'
import { UseFormProps, UseFormRegister } from 'react-hook-form'

import { ModalProps } from '../Modal/Modal.types'

export type MessageSenderModalForm = {
  message: string
}
// titleの初期値は メッセージの送信にする
export type MessageSenderModalProps = {
  title?: ReactNode // defaultValue = メッセージの送信
  label?: string // defaultValue = メッセージ, TODO TextArea変更マージ後に型を変える
  onSend: (message: string) => void | Promise<unknown> // Promise.catch()に入った段階でエラーの文言を表示する
  registerOption?: Parameters<UseFormRegister<MessageSenderModalForm>>[1]
  useFormOption?: UseFormProps<MessageSenderModalForm>
  maxLength?: number
} & Omit<ModalProps, 'children'>
