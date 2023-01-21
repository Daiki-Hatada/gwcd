export type DropFileAreaProps = {
  onDrop: (files: FileList) => void
} & Omit<JSX.IntrinsicElements['div'], 'onDrop'>
