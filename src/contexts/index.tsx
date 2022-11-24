import { ThemesOptions } from '@/types'
import { createContext, PropsWithChildren, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { States } from './types'

const AppContext = createContext<States | undefined>(undefined)

function AppProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState('pt-BR')
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((prevState) =>
      prevState === ThemesOptions.dark
        ? ThemesOptions.light
        : ThemesOptions.dark
    )
  }

  return (
    <AppContext.Provider
      value={{
        language: { language, setLanguage },
        theme: { theme, toggleTheme },
      }}
    >
      <ThemeProvider theme={{ theme }}>{children}</ThemeProvider>
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
