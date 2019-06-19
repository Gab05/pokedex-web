import React from 'react'
import ServiceContainer from '../../services/ServiceContainer'
import { RouteProps } from 'react-router'
import { Move } from '../../models/move/Move'
import { MoveFactory } from '../../factories/MoveFactory'
import { Type } from '../../models/type/Type'
import { MoveService } from '../../services/move/MoveService'
import { MoveNameBeautifier } from '../../services/nameBeautifiers/MoveNameBeautifier'
import { TypeDisplay } from '../type/TypeDisplay'
import { MoveCategoryDisplay } from './MoveCategoryDisplay'
import './MoveDisplay.css'

interface MoveDisplayState {
  name: string
  type: Type
  move: Move
}

export class MoveDisplay extends React.Component<any & RouteProps, MoveDisplayState> {

  private moveService = ServiceContainer.get(MoveService)
  private moveFactory = ServiceContainer.get(MoveFactory)
  private moveNameBeautifier = ServiceContainer.get(MoveNameBeautifier)

  constructor(props: any) {
    super(props)

    this.state = {
      name: this.props.match.params.name,
      type: this.moveService.getType(this.props.match.params.name),
      move: this.moveFactory.createBlankMove(),
    }
  }

  componentDidMount(): void {
    this.moveService.fetchMoveByName(this.props.match.params.name).then((fetchedMove: Move) =>
      this.setState(() => ({ move: fetchedMove })))
  }

  render() {
    return (
      <div className='move-display'>
        <section className='hero is-success'>
          <div className='hero-body level'>
            <div className='level-left'>
              <h1 className='move-title__text title level-item has-text-left'>
                {this.moveNameBeautifier.beautifyName(this.state.name)}
              </h1>
              <div className='move-title__icon level-item'>
                <TypeDisplay type={this.state.type}/>
                <MoveCategoryDisplay category={this.state.move.category}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
