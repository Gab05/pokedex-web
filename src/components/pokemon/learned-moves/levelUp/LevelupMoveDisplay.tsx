import React from 'react'
import { Move } from '../../../../models/move/Move'
import { TypeDisplay } from '../../../type/TypeDisplay'
import { MoveCategoryDisplay } from '../../../move/title/MoveCategoryDisplay'
import { GenericNameBeautifier } from '../../../../services/name-beautifiers/GenericNameBeautifier'
import ServiceContainer from '../../../../services/ServiceContainer'
import './LevelupMoveDisplay.css'

interface LevelupMoveDisplayProps {
  level: string
  move: Move
}

export class LevelupMoveDisplay extends React.Component<LevelupMoveDisplayProps, any> {

  private readonly nameBeautifier: GenericNameBeautifier = ServiceContainer.get(GenericNameBeautifier)

  render = (): JSX.Element => (
    <div className='container'>
      <div className='columns is-mobile'>
        <div className='column is-1 has-text-centered'>{this.props.level}</div>
        <div className='column is-3 has-text-centered'>
          <a href={`/move/${this.props.move.name}`} className='move__name'>
            {this.nameBeautifier.beautifyName(this.props.move.name)}
          </a>
        </div>

        <div className='column is-2 has-text-right'>
            <TypeDisplay type={this.props.move.type}/>
        </div>

        <div className='column is-2 has-text-left'>
          <MoveCategoryDisplay category={this.props.move.category}/>
        </div>

        <div className='column is-1 has-text-centered'>
          {this.props.move.power === -1 ? '--' : this.props.move.power}</div>
        <div className='column is-1 has-text-centered'>
          {this.props.move.accuracy === -1 ? '--' : this.props.move.accuracy}
        </div>
        <div className='column is-2 has-text-centered'>{this.props.move.pp}</div>
      </div>
    </div>
  )
}
