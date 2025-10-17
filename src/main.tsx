import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

// ✅ Import Clarity
import { clarity } from 'react-microsoft-clarity'

// Polyfill (needed in some Vite + TS setups)
if (typeof global === 'undefined') {
  globalThis.global = globalThis
}

// ✅ Initialize Clarity only in production
if (import.meta.env.MODE === 'production') {
  clarity.init('tixsyd61mb')

  // 👇 Safely access the global clarity function
  const win = window as any
  const clarityFn = win.clarity || function () {}

  // ✅ Capture UTM parameters once on load
  const params = new URLSearchParams(window.location.search)
  params.forEach((value, key) => {
    if (key.toLowerCase().startsWith('utm')) {
      clarityFn('set', key.toLowerCase(), value)
    }
  })

  // Optional: store all params in one field for easier filtering
  if (params.toString()) {
    clarityFn('set', 'utm_full', window.location.search)
  }
}

createRoot(document.getElementById('root')!).render(<App />)
