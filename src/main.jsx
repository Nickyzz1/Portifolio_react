import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics/>
    <SpeedInsights/>
    <App/>
  </StrictMode>,
)
