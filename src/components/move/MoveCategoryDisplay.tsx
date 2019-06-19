import React from 'react'
import { MoveCategory } from '../../models/move/MoveCategory'
import { LoadingSpinner } from '../LoadingSpinner'
import './MoveCategoryDisplay.css'

interface MoveCategoryDisplayProps {
  category: MoveCategory
}

export class MoveCategoryDisplay extends React.Component<MoveCategoryDisplayProps, any> {

  render() {
    return (
      <button className={'move__button button ' + this.props.category.toLowerCase()}>
        {this.props.category
          ? <img src={this.iconUrl()} className='move__button-text' alt=''/>
          : <LoadingSpinner/>
        }
      </button>
    )
  }

  private iconUrl = (): string => process.env.PUBLIC_URL + '/icons/moves/' + this.props.category + '.svg'
}
