import React from 'react'
import './EggGroupTitle.css'
import eggLogo from '../../../assets/egg.png'

interface EggGroupTitleProps {
  name: string
  beautifiedName: string
}

export class EggGroupTitle extends React.Component<EggGroupTitleProps, any> {

  render() {
    return (
      <section className='egg-group-title hero'>
        <div className='hero-body level'>
          <div className='level-left'>
            <h1 className='egg-group-title__text level-item has-text-left'>
              {`${this.props.beautifiedName}`}
            </h1>
            <img src={eggLogo} className='egg-group-title__icon level-item' alt=''/>
            <h1 className='egg-group-title__text level-item has-text-left'>
              {`Egg Group`}
            </h1>
          </div>
        </div>
      </section>
    )
  }
}
