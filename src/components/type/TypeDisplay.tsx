import React from 'react'
import { Type } from '../../models/type/Type'

interface TypeDisplayProps {
  types?: Type[]
}

export class TypeDisplay extends React.Component<TypeDisplayProps, any> {

  render() {
    const typeDisplay = []

    for (const type in this.props.types)
      typeDisplay.push(<div className='subtitle'>{type}</div>)

    return (
      <div>
        {typeDisplay}
      </div>
    )
  }
}
