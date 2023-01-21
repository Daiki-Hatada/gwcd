import { ButtonProps } from '../Button/Button.types'

export type FileInputProps = {
  buttonChildren?: ButtonProps['children'] // defaultValue=<><Icon iconName="添付のクリップ" />"ファイルを添付する"</Icon>
  maxFileByte?: number // これが入ってきている場合は計0/${byte}${unit}を画面に表示する。byte unit はutils/file/getByteUnit()から取得する
  accept?: string
  onChange?: (file: File) => void
  onError?: () => void // エラー理由を引数に入れれば綺麗だが、今回のUIだと表示する必要がないため、どちらでも問題ない
}
