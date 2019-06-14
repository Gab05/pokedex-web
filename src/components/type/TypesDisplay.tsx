import React from 'react'
import { Type } from '../../models/type/Type'
import { TypeDisplay } from './TypeDisplay'

interface TypesDisplayProps {
  types?: Type[]
}

export class TypesDisplay extends React.Component<TypesDisplayProps, any> {

  render() {
    return (
      <div className='container'>
        {this.displayTypes()}
      </div>
    )
  }

  private displayTypes(): JSX.Element[] {
    return this.props.types!!.map((t: Type) => <TypeDisplay type={t} key={t}/>)
  }
}
