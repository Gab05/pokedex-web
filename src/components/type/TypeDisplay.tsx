import React from 'react'
import { Type } from '../../models/type/Type'
import { GenericNameBeautifier } from '../../services/name-beautifiers/GenericNameBeautifier'
import ServiceContainer from '../../services/ServiceContainer'
import './TypeDisplay.css'

interface TypeDisplayProps {
  type: Type
  classes?: string
}

export class TypeDisplay extends React.Component<TypeDisplayProps, any> {

  private readonly nameBeautifier: GenericNameBeautifier = ServiceContainer.get(GenericNameBeautifier)

  render = (): JSX.Element => (
    <button className={this.computeClasses()}>
        {this.nameBeautifier.beautifyName(this.props.type.toString())}
    </button>
  )

  private computeClasses = (): string =>
    `button ${this.props.type.toLowerCase()} type__button ${this.props.classes ? this.props.classes : ''}`
}
