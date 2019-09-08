import React from 'react'
import { Type } from '../../models/type/Type'
import { LoadingSpinner } from '../LoadingSpinner'
import { TypeDisplay } from './TypeDisplay'

interface TypesDisplayProps {
  types?: Type[]
}

export class TypesDisplay extends React.Component<TypesDisplayProps, any> {

  render = (): JSX.Element => <div>{this.displayTypes()}</div>

  private displayTypes = (): JSX.Element[] | JSX.Element =>
    this.props.types
      ? this.props.types.map((t: Type) => <div key={t}><TypeDisplay type={t}/></div>)
      : <LoadingSpinner/>
}
