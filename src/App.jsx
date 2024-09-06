import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/IphoneShowcase'
import IphoneShowcase from './components/IphoneShowcase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <IphoneShowcase/>
    </>
  )
}

export default App
