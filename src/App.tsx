import { RouterProvider } from 'react-router-dom'

import { Router } from '@/routes'
import './i18n'

function App() {
  return <RouterProvider router={Router} />
}

export default App
