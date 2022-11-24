import { Dispatch, SetStateAction } from 'react'

export type Language = {
  language: string
  setLanguage: Dispatch<SetStateAction<string>>
}
