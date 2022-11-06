import { RouterProvider } from 'react-router-dom'

import { Router } from '@/routes'
import './i18n'
import { AppProvider } from './contexts'

function App() {
  return (
    <AppProvider>
      <RouterProvider router={Router} />
    </AppProvider>
  )
}

export default App
