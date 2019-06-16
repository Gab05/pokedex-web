import React from 'react'
import { Weight } from '../../../models/pokemon/basic/Weight'
import { LoadingSpinner } from '../../LoadingSpinner'
import './WeightDisplay.css'

interface WeightDisplayProps {
  weight: Weight
}

export class WeightDisplay extends React.Component<WeightDisplayProps, any> {
  render() {
    return (
      <div>
        <div className='weight__display level is-mobile'>
          <span className='weight__value level-item'>
            {this.props.weight.kg ? this.props.weight.kg : <LoadingSpinner/>}
          </span>
          <span className='weight__unit level-item'>kg</span>
        </div>
        <div className='weight__display level is-mobile'>
          <span className='weight__value level-item'>
            {this.props.weight.lbs ? this.props.weight.lbs : <LoadingSpinner/>}
          </span>
          <span className='weight__unit level-item'>lbs</span>
        </div>
      </div>
    )
  }
}
