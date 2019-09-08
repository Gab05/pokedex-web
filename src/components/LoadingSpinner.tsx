import React from 'react'
import pokeballLogo from '../assets/pokeball.png'
import './LoadingSpinner.css'

export class LoadingSpinner extends React.Component {
  render = (): JSX.Element =>
    <img className='loadingspinner__image' src={pokeballLogo} alt=''/>
}
