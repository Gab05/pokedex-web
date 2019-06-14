import React from 'react'
import { Type } from '../../models/type/Type'
import './TypeDisplay.css'

interface TypeDisplayProps {
  type: Type
}

export class TypeDisplay extends React.Component<TypeDisplayProps, any> {

  render() {
    return (
        <div className='type container'>
          <button className={'type__button button ' + this.props.type.toLowerCase()}>
            {this.props.type}
          </button>
        </div>
    )
  }
}
