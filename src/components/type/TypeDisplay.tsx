import React from 'react'
import { Type } from '../../models/type/Type'

interface TypeDisplayProps {
  types?: Type[]
}

export class TypeDisplay extends React.Component<TypeDisplayProps, any> {

  render() {
    return (
      <div>
        {this.props.types ? <div className='subtitle'>{this.props.types[0]}</div> : null}
        {this.props.types ? <div className='subtitle'>{this.props.types[1] ? this.props.types[1] : null}</div> : null}
      </div>
    )
  }
}
