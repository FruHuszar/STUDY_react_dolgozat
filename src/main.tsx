import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { SzobaProvider } from './contexts/szobaContext.tsx'
import "./css/kartyaformazas.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SzobaProvider>
    <App />
    </SzobaProvider>
  </StrictMode>,
)
