import classNames from 'classnames'
import { forwardRef, ChangeEvent, useId } from 'react'

import { FlexBox, Typography, InputLabel } from '..'
import styles from './TextArea.module.scss'

import type { TextAreaProps } from './TextArea.types'

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const { children, required, error, label, textareaMaxHeight, className, ...textAreaProps } = props
  const { id: propId, style, ...textAreaRestProps } = textAreaProps
  const useIdValue = useId()
  const id = propId || useIdValue

  const handleKeyDown = (event: ChangeEvent<HTMLTextAreaElement>) => {
    /* eslint-disable-next-line no-param-reassign */
    event.target.style.height = 'inherit'
    if (typeof textareaMaxHeight === 'number') {
      /* eslint-disable-next-line no-param-reassign */
      event.target.style.height =
        event.target.scrollHeight < textareaMaxHeight ? `${event.target.scrollHeight}px` : `${textareaMaxHeight}px`
    }
  }

  return (
    <label htmlFor={id} className={classNames(styles[error ? 'error' : 'primary'], className)}>
        <FlexBox flexDirection='column' gap="0.25rem">
          <FlexBox>
            <Typography color={error ? 'error' : undefined}>
              {label && <InputLabel label={label} required={required} />}
            </Typography>
          </FlexBox>
          <div className={children ? styles.textbox : ''}>
            <FlexBox alignItems='flex-end'>
              <textarea
                id={id}
                ref={ref}
                rows={1}
                style={style}
                required={required}
                onChange={handleKeyDown}
                {...textAreaRestProps}
              />
            </FlexBox>
            <FlexBox>
              {children && (
                <Typography>
                  <hr />
                  <div className={styles.children}>{children}</div>
                </Typography>
              )}
            </FlexBox>
          </div>
          {error && <Typography color="error">{error}</Typography>}
        </FlexBox>
      </label>
  )
})

const [displayName] = Object.keys({ TextArea })
TextArea.displayName = displayName

export default TextArea
