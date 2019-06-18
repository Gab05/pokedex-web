import React from 'react'
import { Type } from '../../models/type/Type'
import './TypeDisplay.css'

interface TypeDisplayProps {
  type: Type
}

export class TypeDisplay extends React.Component<TypeDisplayProps, any> {

  render() {
    return (
      <button className={'type__button button ' + this.props.type.toLowerCase()}>
        <span className={'type__button-text'}>{this.props.type[0] + this.props.type.slice(1).toLowerCase()}</span>
      </button>
    )
  }
}
