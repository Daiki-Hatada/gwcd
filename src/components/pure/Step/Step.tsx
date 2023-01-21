import classNames from 'classnames'
import React from 'react'

import styles from './Step.module.scss'
import { StepProps } from './Step.types'
// TODO
const Step: React.FC<StepProps> = ({ contents: _, direction: _direction = 'horizontal', ...otherProps }) => <div {...otherProps} className={classNames(styles.root, otherProps.className)} />
export default Step
