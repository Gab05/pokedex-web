import React from 'react'
import './AbilityDisplay.css'
import { GenericNameBeautifier } from '../../../services/nameBeautifiers/GenericNameBeautifier'
import ServiceContainer from '../../../services/ServiceContainer'

interface AbilityDisplayProps {
  title: string
  value: string
  description: string
}

export class AbilityDisplay extends React.Component<AbilityDisplayProps, any> {

  private readonly nameBeautifier = ServiceContainer.get(GenericNameBeautifier)

  render() {
    return (
      <div>
        {this.displayAbility()}
      </div>
    )
  }

  private displayAbility = (): JSX.Element => {
    if (!this.props.value) return <div/>
    else
      return (
        <div className='ability__display'>
          <div className='ability__header tile is-pink'>
            <div className='ability__title'>{this.props.title}:&nbsp;</div>
            <div className='ability__value'>{this.nameBeautifier.beautifyName(this.props.value)}</div>
          </div>
          <div className='tile box ability__description'>{this.props.description}</div>
        </div>
      )
  }
}
