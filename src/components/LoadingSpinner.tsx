import React from 'react'
import './LoadingSpinner.css'
import pokeballLogo from '../assets/pokeball.png'

export class LoadingSpinner extends React.Component {
  render() {
    return (
      <div>
        <img className='loadingspinner__image' src={pokeballLogo} alt=''/>
      </div>
    )
  }
}
