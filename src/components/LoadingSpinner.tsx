import React from 'react'
import pokeballLogo from '../assets/pokeball.png'
import './LoadingSpinner.css'

export class LoadingSpinner extends React.Component {
  render = () => <img className='loadingspinner__image' src={pokeballLogo} alt=''/>
}
