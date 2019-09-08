import React from 'react'
import ServiceContainer from '../../../services/ServiceContainer'
import { GenericNameBeautifier } from '../../../services/name-beautifiers/GenericNameBeautifier'
import { LoadingSpinner } from '../../LoadingSpinner'
import './AbilityDisplay.css'

interface AbilityDisplayProps {
  title: string
  value: string
  description: string
}

export class AbilityDisplay extends React.Component<AbilityDisplayProps, any> {

  private readonly nameBeautifier = ServiceContainer.get(GenericNameBeautifier)

  render = (): JSX.Element => this.displayAbility()

  private displayAbility = (): JSX.Element => {
    if (!this.props.value) return <div/>
    else return (
      <div className='ability__display'>
        <div className='ability__header tile is-pink level'>
          <div className='level-item'>
            <p className='ability__value has-text-centered'>{this.nameBeautifier.beautifyName(this.props.value)}</p>
            <p className='ability__title'>&nbsp;{this.props.title}</p>
          </div>
        </div>
        <div className='tile box ability__description has-text-left'>
          {this.props.description ? this.props.description : <LoadingSpinner/>}
        </div>
      </div>
    )
  }
}
