import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

// ✅ Import Clarity
import { clarity } from 'react-microsoft-clarity'

// Polyfill (needed in some Vite + TS setups)
if (typeof global === 'undefined') {
  globalThis.global = globalThis
}

// ✅ Only initialize Clarity in production
if (import.meta.env.MODE === 'production') {
  clarity.init('tixsyd61mb')
}

createRoot(document.getElementById('root')!).render(
  <>
    <App />
  </>,
)
