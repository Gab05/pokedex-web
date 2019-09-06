import React from 'react'
import { Type } from '../../models/type/Type'
import { LoadingSpinner } from '../LoadingSpinner'
import { TypeDisplay } from './TypeDisplay'

interface TypesDisplayProps {
  types?: Type[]
}

export class TypesDisplay extends React.Component<TypesDisplayProps, any> {

  render() {
    const displayTypes = this.displayTypes()
    return (
      <div className='container'>
        {displayTypes.length ? displayTypes: <LoadingSpinner/>}
      </div>
    )
  }

  private displayTypes = (): JSX.Element[] =>
    this.props.types!!.map(
      (t: Type) => <div key={t}><TypeDisplay type={t}/></div>
    )
}
