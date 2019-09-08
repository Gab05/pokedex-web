import React from 'react'
import { Move } from '../../../../models/move/Move'
import { TypeDisplay } from '../../../type/TypeDisplay'
import { MoveCategoryDisplay } from '../../../move/title/MoveCategoryDisplay'
import { GenericNameBeautifier } from '../../../../services/name-beautifiers/GenericNameBeautifier'
import ServiceContainer from '../../../../services/ServiceContainer'

interface EggMoveDisplayProps {
  move: Move
}

export class EggMoveDisplay extends React.Component<EggMoveDisplayProps, any> {

  private readonly nameBeautifier: GenericNameBeautifier = ServiceContainer.get(GenericNameBeautifier)

  render = (): JSX.Element => (
    <div className='container'>
      <div className='columns is-mobile'>
        <div className='column is-4 has-text-centered'>
          <a href={`/move/${this.props.move.name}`} className='move__name'>
            {this.nameBeautifier.beautifyName(this.props.move.name)}
          </a>
        </div>

        <div className='column is-3 has-text-left'>
            <TypeDisplay type={this.props.move.type}/>
            <MoveCategoryDisplay category={this.props.move.category}/>
        </div>

        <div className='column is-1'>{this.props.move.power === -1 ? '--' : this.props.move.power}</div>
        <div className='column is-1'>{this.props.move.accuracy === -1 ? '--' : this.props.move.accuracy}</div>
        <div className='column is-2'>{this.props.move.pp} PP</div>
        <div className='column is-2'/>
      </div>
    </div>
  )
}
