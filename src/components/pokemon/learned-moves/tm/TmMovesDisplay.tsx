import React from 'react'
import dropdownArrow from '../../../../assets/dropdownarrow.png'
import cdIcon from '../../../../assets/cdicon.png'
import { Move } from '../../../../models/move/Move'
import { TmMoveDisplay } from './TmMoveDisplay'
import './TmMovesDisplay.css'

interface TmMovesDisplayProps {
  moveMap: Map<string, Move>
}

export class TmMovesDisplay extends React.Component<TmMovesDisplayProps, any> {

  render = (): JSX.Element => (
    <div className='tm-moves__display'>
      <div
        id='tm-moves_dropdown-header'
        className='tm-moves__header tile notification is-success level is-mobile closed'
        onClick={this.toggleList}
      >
        <div className='level-left'>
          <img src={cdIcon} className='tm__icon level-item' alt=''/>
          <p className='level-item'>TM Moves</p>
        </div>
        <div id='tm-moves_dropdown-arrow' className='tm-moves_dropdown-arrow level-right closed'>
          <img src={dropdownArrow} className='arrow__icon' alt=''/>
        </div>
      </div>
      <div id='tm-moves_dropdown' className='tm-moves__dropdown fadeout'>
        <div>
          {this.renderMoveListElements()}
        </div>
      </div>
    </div>
  )

  private renderMoveListElements = (): JSX.Element[] => {
    const listElements: JSX.Element[] = Array.of(this.generateListHeader())
    const tms: string[] = this.sortTms(Array.from(this.props.moveMap.keys()))
    const classIfLast = (level: string): string => tms.indexOf(level) === tms.length - 1 ? 'last' : ''

    for (const tm of tms) listElements.push(
      <div key={this.props.moveMap.get(tm)!.name} className={`box tm__move ${classIfLast(tm)}`}>
        <TmMoveDisplay tm={tm} move={this.props.moveMap.get(tm)!}/>
      </div>
    )
    return listElements
  }

  private generateListHeader = (): JSX.Element => (
    <div key='header' className='container list__header'>
      <div className='columns is-mobile'>
        <div className='column is-1 has-text-centered'>TM</div>
        <div className='column is-3 has-text-centered'>Name</div>
        <div className='column is-3 has-text-centered'>Type & category</div>
        <div className='column is-3 has-text-centered'>Power & accuracy</div>
        <div className='column is-2 has-text-centered'>PP</div>
      </div>
    </div>
  )

  private toggleList = (): void => {
    const dropdown = document.getElementById('tm-moves_dropdown')
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
    const arrow = document.getElementById('tm-moves_dropdown-arrow')
    if (arrow!.classList.contains('closed'))
      arrow!.classList.remove('closed')
    else
      arrow!.classList.add('closed')

    this.toggleHeader()
  }

  private toggleHeader = (): void => {
    const header = document.getElementById('tm-moves_dropdown-header')
    if (header!.classList.contains('closed'))
      header!.classList.remove('closed')
    else
      header!.classList.add('closed')
  }

  private sortTms = (tms: string[]) => tms.sort((a, b) => +a > +b ? 1 : 0)
}
