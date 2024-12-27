import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import AppRoutes from './Routes/AppRoutes'
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './Providers/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <BrowserRouter>
            <ScrollToTop />
            <AppRoutes />
            <Toaster />
          </BrowserRouter>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
