import { Dispatch, SetStateAction } from 'react'

export type Theme = {
  theme: string
  toggleTheme: Dispatch<SetStateAction<string>>
}
