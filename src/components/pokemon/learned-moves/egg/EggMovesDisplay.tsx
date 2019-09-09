import React from 'react'
import eggIcon from '../../../../assets/egg.png'
import dropdownArrow from '../../../../assets/dropdownarrow.png'
import { Move } from '../../../../models/move/Move'
import './EggMovesDisplay.css'
import { EggMoveDisplay } from './EggMoveDisplay'

interface EggMovesDisplayProps {
  moveList: Move[]
}

interface EggMovesDisplayState {
  dropdownClosed: boolean
}

export class EggMovesDisplay extends React.Component<EggMovesDisplayProps, EggMovesDisplayState> {

  constructor(props: any) {
    super(props)

    this.state = { dropdownClosed: true }
  }

  render = (): JSX.Element => (
    <div>
      <div
        id='egg-moves_dropdown-header'
        className='egg-moves__header tile notification is-success level is-mobile closed'
        onClick={this.toggleDropdown}
      >
        <div className='level-left'>
          <img src={eggIcon} className='egg__icon level-item' alt='' />
          <p className='level-item'>Egg Moves</p>
        </div>
        <div id='egg-moves_dropdown-arrow' className='egg-moves_dropdown-arrow level-right closed'>
          <img src={dropdownArrow} className='arrow__icon' alt='' />
        </div>
      </div>
      <div id='egg-moves_dropdown' className='egg-moves__dropdown closed'>
        {this.renderMoveListElements()}
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
      <div className='container list__header'>
        <div className='columns is-mobile'>
          <div className='column is-4 has-text-centered'>Name</div>
          <div className='column is-4 has-text-centered'>Type & Category</div>
          <div className='column is-1 has-text-centered'>Pow.</div>
          <div className='column is-1 has-text-centered'>Acc.</div>
          <div className='column is-2 has-text-centered'>PP</div>
        </div>
      </div>
  )

  private toggleDropdown = (): void => {
    this.updateDropdownHeader(this.state.dropdownClosed)
    this.updateDropdown(this.state.dropdownClosed)

    this.setState((previous: EggMovesDisplayState) =>
      ({ dropdownClosed: !previous.dropdownClosed}))
  }

  private updateDropdownHeader = (close: boolean): void => {
    this.updateHeader(close)
    this.updateArrow(close)
  }

  private updateDropdown = (close: boolean): void => {
    const dropdown = document.getElementById('egg-moves_dropdown')
    close
      ? dropdown!!.classList.remove('closed')
      : dropdown!!.classList.add('closed')
  }

  private updateHeader = (close: boolean): void => {
    const header = document.getElementById('egg-moves_dropdown-header')
    close
      ? header!!.classList.remove('closed')
      : header!!.classList.add('closed')
  }

  private updateArrow  = (close: boolean): void => {
    const arrow = document.getElementById('egg-moves_dropdown-arrow')
    close
      ? arrow!!.classList.remove('closed')
      : arrow!!.classList.add('closed')
  }
}
