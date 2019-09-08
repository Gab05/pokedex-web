import React from 'react'
import { Type } from '../../models/type/Type'
import { GenericNameBeautifier } from '../../services/name-beautifiers/GenericNameBeautifier'
import ServiceContainer from '../../services/ServiceContainer'
import './TypeDisplay.css'

interface TypeDisplayProps {
  type: Type
}

export class TypeDisplay extends React.Component<TypeDisplayProps, any> {

  private readonly nameBeautifier: GenericNameBeautifier = ServiceContainer.get(GenericNameBeautifier)

  render = (): JSX.Element => (
    <button className={`type__button button ${this.props.type.toLowerCase()}`}>
      <span className={'type__button-text'}>
        {this.nameBeautifier.beautifyName(this.props.type.toString())}
      </span>
    </button>
  )
}
