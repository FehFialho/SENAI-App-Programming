import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Clock } from '../components/Clock.jsx'
import { Timer } from '../components/Timer.jsx'
import { Counter } from '../components/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Clock></Clock>
    {/* <Timer></Timer> */}
    <Counter></Counter>
  </StrictMode>,
)
