import React from 'react'
import pikachuLogo from '../assets/pikachulogo.png'
import './Home.css'

export class Home extends React.Component {
  render = (): JSX.Element => (
    <div className='home__body'>
      <div>
        <h1>Welcome!</h1>
        <img src={pikachuLogo} alt='' />
      </div>
    </div>
  )
}
