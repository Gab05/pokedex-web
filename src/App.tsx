import React from 'react'
import { Navbar } from './components/navbar/Navbar'
import { Home } from './components/Home'
import { ResourceType } from './models/ResourceType'
import { Pokemon } from './components/pokemon/Pokemon'
import { Move } from './components/move/Move'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <div className='App-body'>
          <Route path='/' exact={true} component={Home} />
          <Route path={`/${ResourceType.POKEMON}/:name`} component={Pokemon} />
          <Route path={`/${ResourceType.MOVE}/:name`} component={Move} />
        </div>
      </Router>
    </div>
  )
}

export default App
