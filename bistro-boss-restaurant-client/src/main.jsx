import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import AppRoutes from './Routes/AppRoutes'
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
