import { useTranslation } from 'react-i18next'

import { Typography } from '..'
import styles from './InputLabel.module.scss'
import { InputLabelProps } from './InputLabel.types'

const InputLabel: React.FC<InputLabelProps> = ({ label, required }) => {
  const { t } = useTranslation()
  return (
    <div className={styles.root}>
      {typeof label === 'string' || typeof label === 'number' ? (
        <Typography weight="bold">{label}</Typography>
      ) : (
        label
      )}
      {required && (
        <Typography weight="bold" color="error">
          {t('hello')}
        </Typography>
      )}
    </div>
  )
}
export default InputLabel
