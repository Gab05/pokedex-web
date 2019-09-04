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
          <div className='level-item'>
            <div className='weight__value'>
              {this.props.weight.kg ? this.props.weight.kg : <LoadingSpinner/>}
            </div>
            <div className='weight__unit'>&nbsp;&nbsp;kg</div>
          </div>
        </div>
        <div className='weight__display level is-mobile'>
          <div className='level-item'>
            <div className='weight__value'>
              {this.props.weight.lbs ? this.props.weight.lbs : <LoadingSpinner/>}
            </div>
            <div className='weight__unit'>&nbsp;&nbsp;lbs</div>
          </div>
        </div>
      </div>
    )
  }
}
