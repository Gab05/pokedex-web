import React from 'react'
import { SearchBar } from './SearchBar'
import { Link } from 'react-router-dom'
import pokeballIcon from '../../assets/pokeball.png'

export class Navbar extends React.Component {

  render() {
    return (
      <div className='navbar is-fixed-top is-link'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <img src={pokeballIcon} alt=''/>
          </Link>
          <div className='navbar-item'>
            <SearchBar />
          </div>
        </div>
      </div>
    )
  }
}
