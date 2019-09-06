import React from 'react'
import ServiceContainer from '../../../services/ServiceContainer'
import { Move } from '../../../models/move/Move'
import { Type } from '../../../models/type/Type'
import { GenericNameBeautifier } from '../../../services/name-beautifiers/GenericNameBeautifier'
import { TypeDisplay } from '../../type/TypeDisplay'
import { MoveCategoryDisplay } from './MoveCategoryDisplay'
import './MoveTitle.css'

interface MoveTitleProps {
  name: string
  type: Type
  move: Move
}

export class MoveTitle extends React.Component<MoveTitleProps, any> {
  private moveNameBeautifier = ServiceContainer.get(GenericNameBeautifier)

  render() {
    return (
      <section className='move-title hero is-success'>
        <div className='hero-body level'>
          <div className='level-left'>
            <h1 className='move-title__text title level-item has-text-left'>
              {this.moveNameBeautifier.beautifyName(this.props.name)}
            </h1>
            <div className='move-title__icon level-item'>
              <TypeDisplay type={this.props.type}/>
              <MoveCategoryDisplay category={this.props.move.category}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
