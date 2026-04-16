import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Component from '../components/Component/Component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Component />
  )
}

export default App
