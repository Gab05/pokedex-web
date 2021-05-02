import React from 'react'
import { Navbar } from './components/navbar/Navbar'
import { Home } from './components/Home'
import { ResourceType } from './models/ResourceType'
import { PokemonDisplay } from './components/pokemon/PokemonDisplay'
import { MoveDisplay } from './components/move/MoveDisplay'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import EggGroupPokemonDisplay from './components/eggGroup/EggGroupPokemonDisplay'
import './App.css'

export const App = (): JSX.Element => (
  <div className='app'>
    <Router>
      <Navbar/>
      <div className='app-body'>
        <Route path='/' exact={true} component={Home}/>
        <Route path={`/${ResourceType.POKEMON}/:name`} component={PokemonDisplay}/>
        <Route path={`/${ResourceType.MOVE}/:name`} component={MoveDisplay}/>
        <Route path={`/${ResourceType.EGG_GROUP}/:name`} component={EggGroupPokemonDisplay}/>
      </div>
    </Router>
  </div>
)
