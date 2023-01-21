import React, { useEffect, useState } from 'react'

import styles from './Tab.module.scss'
import { TabProps } from './Tab.types'

const Tab: React.FC<TabProps> = ({ contents, onChange, selectedIndex: propsSelectedIndex, defaultIndex }) => {
  const [selectedIndex, setSelectedIndex] = useState(propsSelectedIndex || defaultIndex || 0)

  useEffect(() => {
    if (propsSelectedIndex !== undefined) setSelectedIndex(propsSelectedIndex)
  }, [propsSelectedIndex])

  const onLabelClick = (index: number) => {
    onChange?.(index)
    if (propsSelectedIndex !== undefined) return // selectedIndexを受け取っている場合は、このコンポーネントではselectedIndexを書き換えない
    setSelectedIndex(index)
  }

  return (
    <>
      <ul className={styles.primary}>
        {contents.map(({ label }, index) => (
          <li key={index}>
            <button
              type='button'
              onClick={() => onLabelClick(index)}
              className={selectedIndex === index ? styles.active : styles.inactive}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
      <div>{contents[selectedIndex]?.content}</div>
    </>
  )
}
export default Tab
