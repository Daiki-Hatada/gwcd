import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContext {
  theme: Theme | undefined
  reverseTheme: () => void
}

const ThemeContext = createContext<ThemeContext | undefined>(undefined)

export const useThemeContext = (): ThemeContext => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('`ThemeContext` is not defined.')
  }

  return context
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>()

  useEffect(() => {
    const themeInLocalStorage = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    setTheme(themeInLocalStorage)
    const root = window.document.documentElement
    root.setAttribute('data-theme', themeInLocalStorage)
  }, [])

  const value = useMemo(() => {
    const reverseTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light'
      setTheme(newTheme)
      window.localStorage.setItem('theme', newTheme)
      const root = window.document.documentElement
      root.setAttribute('data-theme', newTheme)
    }
    return {
      theme,
      reverseTheme,
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={value}>
      <script
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{
          __html: `!function(){let e;const t=window.localStorage.getItem("theme");if(null!==t)e=t;else{e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",e)}();`,
        }}
      />
      {children}
    </ThemeContext.Provider>
  )
}
