import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Clock } from '../components/Clock.jsx'
import { Timer } from '../components/Timer.jsx'
import { Counter } from '../components/Counter.jsx'
import { Title } from '../components/Title.jsx'
import { Twinkle } from '../components/Twinkle.jsx'
import { TrafficLight } from '../components/TrafficLight.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Title></Title>
    <TrafficLight></TrafficLight>
    {/* <Twinkle></Twinkle> */}
    {/* <App /> */}
    <Clock></Clock>
    {/* <Timer></Timer> */}
    <Counter></Counter>
  </StrictMode>,
)
