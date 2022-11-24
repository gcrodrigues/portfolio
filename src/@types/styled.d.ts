// styled.d.ts
import { Colors } from '@/styles/themes/types'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: Colors
  }
}
