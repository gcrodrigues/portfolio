import { RouterProvider } from 'react-router-dom'

import { Router } from '@/routes'
import { Page } from '@/components'
import './i18n'
import { AppProvider } from './contexts'
import Global from './styles/global'

function App() {
  return (
    <AppProvider>
      <Page>
        <RouterProvider router={Router} />
      </Page>
      <Global />
    </AppProvider>
  )
}

export default App
