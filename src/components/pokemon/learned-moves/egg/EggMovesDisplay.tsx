import React from 'react'
import eggIcon from '../../../../assets/egg.png'
import dropdownArrow from '../../../../assets/dropdownarrow.png'
import { Move } from '../../../../models/move/Move'
import './EggMovesDisplay.css'

interface EggMovesDisplayProps {
  moveList: Move[]
}

export class EggMovesDisplay extends React.Component<EggMovesDisplayProps, any> {

  render() {
    return (
      <div>
        <div
          className='egg-moves__header tile notification is-success level is-mobile'
          onClick={this.toggleDropdown}
        >
          <div className='level-left'>
            <img src={eggIcon} className='egg__icon level-item' alt='' />
            <p className='level-item'>Egg Moves</p>
          </div>
          <div className='level-right'>
            <img src={dropdownArrow} className='arrow__icon' alt='' />
          </div>
        </div>
        <div className='egg-moves__dropdown'>
          {this.renderMoveListElements()}
        </div>
      </div>
    )
  }

  private renderMoveListElements = (): JSX.Element[] => {
    const elements: JSX.Element[] = []
    this.props.moveList.map((move: Move) => elements.push(
      <div className='box egg__move'>{move.name}</div>
    ))
    return elements
  }

  private toggleDropdown = (): void => {

  }
}
