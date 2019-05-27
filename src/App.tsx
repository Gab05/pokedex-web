import React from 'react'
import pokeballLogo from './assets/pokeball.png'
import { Navbar } from './components/navbar/Navbar'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <header className='App-header'>
        <h1>Welcome!</h1>
        <img src={pokeballLogo} className='App-logo' alt='logo' />
      </header>
    </div>
  )
}

export default App
