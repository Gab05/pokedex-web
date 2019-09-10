import React from 'react'
import eggIcon from '../../../../assets/egg.png'
import dropdownArrow from '../../../../assets/dropdownarrow.png'
import { Move } from '../../../../models/move/Move'
import './EggMovesDisplay.css'
import { EggMoveDisplay } from './EggMoveDisplay'

interface EggMovesDisplayProps {
  moveList: Move[]
}

export class EggMovesDisplay extends React.Component<EggMovesDisplayProps, any> {

  render = (): JSX.Element => (
    <div className='egg-moves__display'>
      <div
        id='egg-moves_dropdown-header'
        className='egg-moves__header tile notification is-success level is-mobile closed'
        onClick={this.toggleList}
      >
        <div className='level-left'>
          <img src={eggIcon} className='egg__icon level-item' alt='' />
          <p className='level-item'>Egg Moves</p>
        </div>
        <div id='egg-moves_dropdown-arrow' className='egg-moves_dropdown-arrow level-right closed'>
          <img src={dropdownArrow} className='arrow__icon' alt='' />
        </div>
      </div>
      <div id='egg-moves_dropdown' className='egg-moves__dropdown fadeout'>
        <div>
          {this.renderMoveListElements()}
        </div>
      </div>
    </div>
  )

  private renderMoveListElements = (): JSX.Element[] => {
    const listElements: JSX.Element[] = Array.of(this.generateListHeader())
    const classIfLast = (move: Move): string =>
      this.props.moveList.indexOf(move) === this.props.moveList.length - 1 ? 'last' : ''

    this.props.moveList.forEach((move: Move): void => {
      listElements.push(
        <div key={move.name} className={`box egg__move ${classIfLast(move)}`}>
          <EggMoveDisplay move={move}/>
        </div>
      )
    })

    return listElements
  }

  private generateListHeader = (): JSX.Element => (
    <div key='header' className='container list__header'>
      <div className='columns is-mobile'>
        <div className='column is-4 has-text-centered'>Name</div>
        <div className='column is-3 has-text-centered'>Type & category</div>
        <div className='column is-3 has-text-centered'>Power & accuracy</div>
        <div className='column is-2 has-text-centered'>PP</div>
      </div>
    </div>
  )

  private toggleList = (): void => {
    const dropdown = document.getElementById('egg-moves_dropdown')
    if (dropdown!.classList.contains('fadeout')) {
      dropdown!.classList.add('fadein')
      dropdown!.classList.remove('fadeout')
    } else {
      dropdown!.classList.add('fadeout')
      dropdown!.classList.remove('fadein')
    }

    this.toggleArrow()
  }

  private toggleArrow  = (): void => {
    const arrow = document.getElementById('egg-moves_dropdown-arrow')
    if (arrow!.classList.contains('closed'))
      arrow!.classList.remove('closed')
    else
      arrow!.classList.add('closed')

    this.toggleHeader()
  }

  private toggleHeader = (): void => {
    const header = document.getElementById('egg-moves_dropdown-header')
    if (header!.classList.contains('closed'))
      header!.classList.remove('closed')
    else
      header!.classList.add('closed')
  }
}
