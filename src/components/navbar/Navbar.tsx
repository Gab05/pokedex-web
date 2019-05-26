import React from 'react'
import { SearchBar } from './SearchBar';
import pokemonList from '../../assets/pokemonList'
import pokeballIcon from '../../assets/sprites/pokeball.png'

export class Navbar extends React.Component {

  render () {
    return (
      <div className="navbar is-fixed-top is-link">
          <div className="navbar-brand">
            <div className='navbar-item'>
              <img src={pokeballIcon} alt='pokeball icon'/>
            </div>
            <div className='navbar-item'>
              <SearchBar pokemonList={pokemonList}/>
            </div>
          </div>
      </div>
    );
  }
}
