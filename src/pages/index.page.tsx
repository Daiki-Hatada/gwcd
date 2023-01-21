import type { NextPage } from 'next'
import { MouseEventHandler } from 'react'

import { useThemeContext } from '../contexts/theme.context'
import i18n from '../utils/i18n'

const Page: NextPage = () => {
  const { reverseTheme } = useThemeContext()

  const handleLanguageButtonClick: MouseEventHandler<HTMLButtonElement> = async (event): Promise<void> => {
    event.preventDefault()
    reverseTheme()
    if (i18n.language === 'js') {
      await i18n.changeLanguage('en-US')
    } else {
      await i18n.changeLanguage('ja')
    }
  }

  return (
    <div>
      <button type='button' onClick={handleLanguageButtonClick}>
        change to en
      </button>
    </div>
  )
}

export default Page
