import React from 'react'
import { MoveCategory } from '../../models/move/MoveCategory'
import './MoveCategoryDisplay.css'

interface MoveCategoryDisplayProps {
  category: MoveCategory
}

export class MoveCategoryDisplay extends React.Component<MoveCategoryDisplayProps, any> {

  render() {
    return (
      <button className={'move__button button ' + this.props.category.toLowerCase()}>
        <img
          src={process.env.PUBLIC_URL + '/icons/moves/' + this.props.category + '.svg'}
          className={'move__button-text'}
          alt='this.props.category'
        />
      </button>
    )
  }
}
