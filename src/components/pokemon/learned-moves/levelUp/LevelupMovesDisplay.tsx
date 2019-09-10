import React from 'react'
import upArrowIcon from '../../../../assets/uparrow.png'
import dropdownArrow from '../../../../assets/dropdownarrow.png'
import { Move } from '../../../../models/move/Move'
import { LevelupMoveDisplay } from './LevelupMoveDisplay'
import './LevelupMovesDisplay.css'

interface LevelupMovesDisplayProps {
  moveMap: Map<string, Move>
}

export class LevelupMovesDisplay extends React.Component<LevelupMovesDisplayProps, any> {

  render = (): JSX.Element => (
    <div className='levelup-moves__display'>
      <div
        id='levelup-moves_dropdown-header'
        className='levelup-moves__header tile notification is-success level is-mobile closed'
        onClick={this.toggleList}
      >
        <div className='level-left'>
          <img src={upArrowIcon} className='egg__icon level-item' alt=''/>
          <p className='level-item'>Level-up Moves</p>
        </div>
        <div id='levelup-moves_dropdown-arrow' className='levelup-moves_dropdown-arrow level-right closed'>
          <img src={dropdownArrow} className='arrow__icon' alt=''/>
        </div>
      </div>
      <div id='levelup-moves_dropdown' className='levelup-moves__dropdown fadeout'>
        <div>
          {this.renderMoveListElements()}
        </div>
      </div>
    </div>
  )

  private renderMoveListElements = (): JSX.Element[] => {
    const listElements: JSX.Element[] = Array.of(this.generateListHeader())
    const levels: string[] = this.sortLevels(Array.from(this.props.moveMap.keys()))
    const classIfLast = (level: string): string => levels.indexOf(level) === levels.length - 1 ? 'last' : ''

    for (const level of levels) listElements.push(
      <div key={this.props.moveMap.get(level)!.name} className={`box levelup__move ${classIfLast(level)}`}>
        <LevelupMoveDisplay level={level} move={this.props.moveMap.get(level)!}/>
      </div>
    )
    return listElements
  }

  private generateListHeader = (): JSX.Element => (
    <div key='header' className='container list__header'>
      <div className='columns is-mobile'>
        <div className='column is-1 has-text-centered'>Lv.</div>
        <div className='column is-3 has-text-centered'>Name</div>
        <div className='column is-3 has-text-centered'>Type & category</div>
        <div className='column is-3 has-text-centered'>Power & accuracy</div>
        <div className='column is-2 has-text-centered'>PP</div>
      </div>
    </div>
  )

  private toggleList = (): void => {
    const dropdown = document.getElementById('levelup-moves_dropdown')
    if (dropdown!.classList.contains('fadeout')) {
      dropdown!.classList.add('fadein')
      dropdown!.classList.remove('fadeout')
    } else {
      dropdown!.classList.add('fadeout')
      dropdown!.classList.remove('fadein')
    }

    this.toggleArrow()
  }

  private toggleArrow = (): void => {
    const arrow = document.getElementById('levelup-moves_dropdown-arrow')
    if (arrow!.classList.contains('closed'))
      arrow!.classList.remove('closed')
    else
      arrow!.classList.add('closed')

    this.toggleHeader()
  }

  private toggleHeader = (): void => {
    const header = document.getElementById('levelup-moves_dropdown-header')
    if (header!.classList.contains('closed'))
      header!.classList.remove('closed')
    else
      header!.classList.add('closed')
  }

  private sortLevels = (levels: string[]) => levels.sort((a, b) => +a > +b ? 1 : 0)
}
