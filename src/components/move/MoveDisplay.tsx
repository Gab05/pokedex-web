import React from 'react'
import ServiceContainer from '../../services/ServiceContainer'
import { RouteProps } from 'react-router'
import { Move } from '../../models/move/Move'
import { MoveFactory } from '../../factories/MoveFactory'
import { Type } from '../../models/type/Type'
import { MoveService } from '../../services/move/MoveService'
import { LoadingSpinner } from '../LoadingSpinner'
import { PowerAccuracyDisplay } from './PowerAccuracyDisplay'
import { PPDisplay } from './PPDisplay'
import { MoveTitle } from './title/MoveTitle'
import './MoveDisplay.css'

interface MoveDisplayState {
  name: string
  type: Type
  move: Move
}

export class MoveDisplay extends React.Component<any & RouteProps, MoveDisplayState> {

  private moveService = ServiceContainer.get(MoveService)
  private moveFactory = ServiceContainer.get(MoveFactory)

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
        <MoveTitle name={this.state.name} type={this.state.type} move={this.state.move}/>
        <div className='display__body container'>
          <div className='tile is-ancestor is-vertical'>
            <div className='tile'>
              <div className='tile is-4 is-vertical'>
                <div className='tile level is-mobile'>
                  <div className='tile is-parent'>
                    <PowerAccuracyDisplay power={this.state.move.power} accuracy={this.state.move.accuracy} />
                  </div>
                  <div className='tile is-parent'>
                    <PPDisplay PP={this.state.move.pp}/>
                  </div>
                </div>
                <div className='tile level is-mobile'>
                  <div className='tile is-parent'>
                    <div className='tile notification is-child is-success'>
                      <p className='display__name'>CRITICAL HIT RATIO</p>
                      <p className='display__value'>
                        {this.state.move.criticalHitRatio ? this.state.move.criticalHitRatio: <LoadingSpinner/>}
                      </p>
                    </div>
                  </div>
                  <div className='tile is-parent'>
                    <div className='tile notification is-child is-success'>
                      <p className='display__name'>SPEED PRIORITY</p>
                      <p className='display__value'>
                        {this.state.move.priority ? this.state.move.priority: <LoadingSpinner/>}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='tile is-8 is-vertical'>
                <div className='tile is-parent'>
                  <div className='tile box is-success is-child has-text-left'>
                    <p className='display__name'>BATTLE DESCRIPTION</p>
                    {this.state.move.battleDescription ? this.state.move.battleDescription : <LoadingSpinner/>}
                  </div>
                </div>
                <div className='tile'>
                  <div className='tile level is-mobile'>
                    <div className='tile battle__effect is-7-mobile'>
                      <div className='tile is-parent'>
                        <div className='tile is-child box is-success has-text-left'>
                          <p className='display__name'>BATTLE EFFECT</p>
                          {this.state.move.battleEffect ? this.state.move.battleEffect : <LoadingSpinner/>}
                        </div>
                      </div>
                    </div>
                    <div className='tile is-4'>
                      <div className='tile is-parent'>
                        <div className='tile is-child notification is-success'>
                          <p className='display__name'>EFFECT RATE</p>
                          <p className='display__value'>
                            {this.state.move.battleEffectRate ? this.state.move.battleEffectRate : <LoadingSpinner/>} %
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='tile'>
              <div className='tile is-4 is-parent'>
                <div className='tile notification is-success is-child'>
                  FLAGS
                </div>
              </div>
              <div className='tile is-8 is-parent'>
                <div className='tile notification is-dark is-child'>
                  Learned by (soon!)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
