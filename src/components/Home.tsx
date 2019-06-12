import React from 'react'
import pikachuLogo from '../assets/pikachulogo.png'
import './Home.css'
import { LoadingSpinner } from './LoadingSpinner'

export class Home extends React.Component {
  render() {
    return (
      <div className='home__body'>
        <div>
          <h1>Welcome!</h1>
          <LoadingSpinner/>
          <img src={pikachuLogo} alt='' />
        </div>
      </div>
    )
  }
}
