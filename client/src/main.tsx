import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './providers/AuthProvider'
import { PetsProvider } from './providers/PetsProvider'
import { AppRouter } from './routes/AppRouter'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <PetsProvider>
        <AppRouter />
        <Toaster position="top-right" />
      </PetsProvider>
    </AuthProvider>
  </StrictMode>,
)
