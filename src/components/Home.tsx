import React from 'react'
import pikachuLogo from '../assets/pikachulogo.png'

export class Home extends React.Component {

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <img src={pikachuLogo} alt='' />
      </div>
    )
  }
}
